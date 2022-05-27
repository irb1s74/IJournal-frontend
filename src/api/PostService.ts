import axios, { AxiosResponse } from 'axios';
import { ROOT_URL } from '../helpers/ROOT_URL';
import { OutputData } from '@editorjs/editorjs';

export default class PostService {
  static async create(token: string): Promise<AxiosResponse> {
    return axios
      .post(
        'post/create',
        {},
        {
          baseURL: ROOT_URL,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${token}`,
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

  static async getPost() {
    return axios
      .get('post/new', {
        baseURL: ROOT_URL,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        return error.response;
      });
  }

  static async update(
    token: string,
    data: {
      postId: number;
      data: { title: string; entry: OutputData['blocks'] };
    }
  ) {
    return axios
      .post('post/update', data, {
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

  static async makePublish(token: string, postId: number) {
    return axios
      .get(`post/publish/${postId}`, {
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

  static async deletePost(token: string, postId: number) {
    return axios
      .delete(`post/delete/${postId}`, {
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
