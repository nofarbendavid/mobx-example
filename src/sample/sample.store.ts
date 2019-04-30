import { action, observable, computed } from 'mobx';
import { Post } from './sample.types';
import * as Logger from 'utils/logger';
import PostsApiService from '../services/postsApiService';

export class PostsStore {
  @observable _posts: Map<number, Post> = new Map();

  async fetchPosts() {
    try {
      const posts = await PostsApiService.fetchPosts();

      this.setPosts(posts);
    } catch (error) {
      Logger.error('failed to load resource: Posts', error);
    }
  }

  @action setPosts(posts: Post[]) {
    posts.forEach(post => this._posts.set(post.id, post));
  }

  @computed get posts() {
    return Array.from(this._posts.values());
  }


}
