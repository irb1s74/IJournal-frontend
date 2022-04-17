import { OutputData } from '@editorjs/editorjs';

export interface IPost {
  id: number;
  data: {
    title: string;
    entry: OutputData['blocks'];
  };
}
