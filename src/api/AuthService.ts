import axios, { AxiosResponse } from 'axios';
import { ROOT_URL } from '../helpers/ROOT_URL';

export default class AuthService {
  static async Login(email: string, password: string): Promise<AxiosResponse> {
    return axios
      .post(
        '/auth/login',
        {
          email,
          password,
        },
        {
          withCredentials: false,
          baseURL: ROOT_URL,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
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

  static async SigIn(
    nickname: string,
    email: string,
    password: string
  ): Promise<AxiosResponse> {
    return axios
      .post(
        '/auth/reg',
        {
          nickname,
          email,
          password,
        },
        {
          withCredentials: false,
          baseURL: ROOT_URL,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
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
