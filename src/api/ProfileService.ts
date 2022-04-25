import axios, { AxiosResponse } from 'axios';
import { ROOT_URL } from '../helpers/ROOT_URL';

export default class ProfileService {
  static async getDrafts(token: string): Promise<AxiosResponse> {
    return axios
      .get('/post/drafts', {
        baseURL: ROOT_URL,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        return error.response;
      });
  }
}
