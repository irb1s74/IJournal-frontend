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

  static async getPublish(token: string): Promise<AxiosResponse> {
    return axios
      .get('/post/publish', {
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

  static async updateBanner(token: string, files: any): Promise<AxiosResponse> {
    const formData = new FormData();
    formData.append('banner', files.item(0));
    return axios
      .post('/profile/banner', formData, {
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
      .catch((e) => {
        return e.response;
      });
  }

  static async updateAvatar(token: string, files: any): Promise<AxiosResponse> {
    const formData = new FormData();
    formData.append('avatar', files.item(0));
    return axios
      .post('/profile/avatar', formData, {
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
      .catch((e) => {
        return e.response;
      });
  }
}
