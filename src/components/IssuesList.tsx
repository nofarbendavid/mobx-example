import React from 'react';
import { inject, observer } from 'mobx-react';
import styled from '@emotion/styled';
import { isEmpty, values } from 'lodash';
import { Stores } from 'stores';
import { IssuesMap } from 'types/issues.types';
import IssueCard from 'components/IssueCard';

@inject((stores: Stores) => ({
  issues: stores.issuesStore.issues,
  fetchIssues: () => stores.issuesStore.fetchIssues(),
  isLoading: stores.networkStore.getByLabel('issues')
}))
@observer
export class IssuesList extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchIssues();
  }

  renderIssues = () => {
    const { issues } = this.props;

    if (isEmpty(issues)) {
      return <div>No issues to display</div>;
    } else {
      return values(issues).map(issue => (
        <IssueCard key={issue.id} issue={issue} />
      ));
    }
  };

  render() {
    const { isLoading } = this.props;
    return (
      <StyledContainer>
        {isLoading ? <div>loading...</div> : this.renderIssues()}
      </StyledContainer>
    );
  }
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
`;

interface OwnProps {}

interface StateProps {
  issues: IssuesMap;
  fetchIssues: () => void;
  isLoading: boolean;
}

type Props = OwnProps & StateProps;

export default IssuesList;
