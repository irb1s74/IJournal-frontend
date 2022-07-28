import axios, { AxiosResponse } from 'axios';
import { ROOT_URL } from '../helpers/ROOT_URL';
import { OutputData } from '@editorjs/editorjs';
import { IPost } from '../models/IPost';

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

  static async getPost(id: number) {
    return axios
      .get(`post/get/${id}`, {
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

  static async getNewPost() {
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

  static async getBookmarksPosts(token: string) {
    return axios
      .get('post/bookmarks', {
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

  static async getPopularPost() {
    return axios
      .get('post/popular', {
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

  static async findPosts(content: string) {
    return axios
      .get(`post/find/${content}`, {
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

  static async getSubsPost(token: string) {
    return axios
      .get('post/subs', {
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

  static async update(
    token: string,
    data: {
      postId: number;
      data: { entry: OutputData['blocks'] };
      title: string;
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

  static async toPublish(token: string, postId: number) {
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

  static async toBookmark(token: string, postId: number) {
    return axios
      .post(
        `bookmarks/to/bookmark`,
        {
          postId,
        },
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

  static async toUnPublish(token: string, postId: number) {
    return axios
      .get(`post/unPublish/${postId}`, {
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

  static async increaseRatingPost(
    postId: number,
    token: string
  ): Promise<
    AxiosResponse<{
      rating: number;
    }>
  > {
    return axios
      .post(
        `post/increase`,
        {
          postId,
        },
        {
          baseURL: ROOT_URL,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(
        (
          res: AxiosResponse<{
            response: IPost;
          }>
        ) => {
          return res;
        }
      )
      .catch((e) => {
        return e.response;
      });
  }

  static async decreaseRatingPost(
    postId: number,
    token: string
  ): Promise<
    AxiosResponse<{
      rating: number;
    }>
  > {
    return axios
      .post(
        `post/decrease`,
        {
          postId,
        },
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
}
