import { action, computed, observable, toJS } from 'mobx';
import { Issue } from 'types/issues.types';
import * as Logger from 'utils/logger';
import { IssuesApiService } from 'services/issuesApiService';

export class IssuesStore {
  @observable _issues: Map<number, Issue> = new Map();

  async fetchIssues() {
    try {
      const issues = await IssuesApiService.fetchIssues();
      this.setIssues(issues);
    } catch (error) {
      Logger.error('failed to load resource: Issues', error);
    }
  }

  @action setIssues(issues: Issue[]) {
    issues.forEach(issue => this._issues.set(issue.number, issue));
  }

  @computed get issues() {
    return Array.from(this._issues.values());
  }
}
