import { OutputData } from '@editorjs/editorjs';

export interface IPost {
  postId: number;
  title: string;
  data: OutputData['blocks'];
}
