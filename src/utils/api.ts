import { networkStore } from '../stores';
import axios from 'axios';
import * as logger from '../utils/logger';

interface IRequestHeaders {
  [key: string]: string
}

interface IAPIParams {
  method?: 'get' | 'post' | 'put' | 'delete';
  url: string
  data?: any,
  networkLabel?: string
  headers?: IRequestHeaders
}

export async function apiRequest<T>({
  method = 'get',
  url,
  networkLabel = 'general',
  data
}: IAPIParams): Promise<Response> {
  networkStore.startNetwork(networkLabel);

  try {
    const response = await axios({
      method,
      url,
      data
    });

    return response.data;
  } catch(err) {
    logger.error(err);

    return Promise.reject(err);
  } finally {
    networkStore.endNetwork(networkLabel);
  }
}