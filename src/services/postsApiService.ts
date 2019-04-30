import { apiRequest } from '../utils/api';
import { PostsApiResponse } from '../sample/sample.types';

export const POSTS_FETCH_NETWORK_LABEL = '[Posts] fetch';

export class PostsApiService {

  public static fetchPosts(): Promise<PostsApiResponse> {
    return apiRequest<PostsApiResponse>({
      url: 'posts',
      networkLabel: POSTS_FETCH_NETWORK_LABEL
    });
  }

}

export default PostsApiService;
