import { OutputData } from '@editorjs/editorjs';
import { IAuthor } from './IAuthor';

export interface IPost {
  id: number;
  author: IAuthor;
  data: {
    title: string;
    entry: OutputData['blocks'];
  };
  publish: boolean
  rating: number;
  updatedAt: string;
}
