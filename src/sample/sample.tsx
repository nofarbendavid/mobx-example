import React from 'react';
import { values } from 'lodash/fp';
import styled from '@emotion/styled';
import { Post, PostsMap } from './sample.types';
import { observer, inject } from 'mobx-react';
import { Stores } from 'stores';

/*
 * Sample component pulling data from server on mount
 */
@inject((stores: Stores) => ({
  posts: stores.postsStore.posts,
  fetchPosts: () => stores.postsStore.fetchPosts(),
  isLoading: stores.networkStore.getByLabel('posts')
}))
@observer
export class Sample extends React.Component<Props> {
  componentDidMount() {
    this.refresh();
  }

  refresh = () => {
    this.props.fetchPosts();
  };

  renderPost = (post: Post) => (
    <StyledPost key={post.id}>
      <h4>{post.title}</h4>
      <p>{post.body}</p>
    </StyledPost>
  );

  renderPosts = () => {
    const { posts } = this.props;

    return <div>{values(posts).map(this.renderPost)}</div>;
  };

  render() {
    const { isLoading } = this.props;

    return (
      <StyledContainer>
        <h1>Title</h1>
        <h3>
          To get started, search your project for // TODO
          <br />
          This is a sample component that uses a sample action + reducer, it
          fetches posts from a remote server and displays them
        </h3>
        <img
          src="https://www.materialui.co/materialIcons/navigation/refresh_grey_192x192.png"
          alt="refresh"
          onClick={this.refresh}
        />
        <h2>Posts from remote server</h2>
        {isLoading ? <div>loading...</div> : this.renderPosts()}
      </StyledContainer>
    );
  }
}

const StyledContainer = styled.div`
  padding: 50px;
  img {
    cursor: pointer;
    width: 35px;
    float: left;
  }
`;

export const StyledPost = styled.div`
  display: inline-block;
  padding: 15px;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.5);
  width: 300px;
  height: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 10px;
`;

interface OwnProps {}

interface StateProps {
  posts: PostsMap;
  fetchPosts: () => void;
  isLoading: boolean;
}

type Props = OwnProps & StateProps;

export default Sample;
