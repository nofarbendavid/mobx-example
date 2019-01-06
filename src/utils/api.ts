import { networkStore } from '../stores';
import axios from 'axios';
import * as logger from '../utils/logger';

interface RequestHeaders {
  [key: string]: string
}

interface APIParams {
  method?: 'get' | 'post' | 'put' | 'delete';
  url: string
  data?: any,
  networkLabel?: string
  headers?: RequestHeaders
}

export async function apiRequest<T>({ method = 'get', url, networkLabel = 'general', data }: APIParams): Promise<T> {
  networkStore.startNetwork(networkLabel);

  try {
    const response = await axios({
      method,
      url,
      data
    });

    return response.data as T;
  } catch(err) {
    logger.error(err);

    return Promise.reject(err);
  } finally {
    networkStore.endNetwork(networkLabel);
  }
}