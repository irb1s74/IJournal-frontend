import axios, { AxiosResponse } from 'axios';
import { ROOT_URL } from '../helpers/ROOT_URL';

export default class PostService {
  static async create(token: string): Promise<AxiosResponse> {
    return axios
      .post(
        '/post/create',
        {},
        {
          baseURL: ROOT_URL,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Authorization': `Basic ${token}`
          },
        }
      )
      .then((res) => {
        return res;
      })
      .catch((e) => {
        return e.response;
      });
  }
}
