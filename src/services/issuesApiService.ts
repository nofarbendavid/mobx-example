import { apiRequest } from '../utils/api';
import { IssuesApiResponse } from 'types/issues.types';

export const ISSUES_FETCH_NETWORK_LABEL = '[Issues] fetch';
const BASE_URL = 'https://api.github.com';
const PATH = '/repos/facebook/react/issues';


export class IssuesApiService {
  public static fetchIssues(): Promise<IssuesApiResponse> {
    return apiRequest<IssuesApiResponse>({
      url: BASE_URL + PATH,
      networkLabel: ISSUES_FETCH_NETWORK_LABEL,
      params: { state: 'all' }
    });
  }
}

export default IssuesApiService;
