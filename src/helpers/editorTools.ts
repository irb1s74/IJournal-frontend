// @ts-ignore
import Embed from '@editorjs/embed';
// @ts-ignore
import Table from '@editorjs/table';
// @ts-ignore
import List from '@editorjs/list';
// @ts-ignore
import Code from '@editorjs/code';
// @ts-ignore
import LinkTool from '@editorjs/link';
// @ts-ignore
import Image from '@editorjs/image';
// @ts-ignore
import Raw from '@editorjs/raw';
import Header from '@editorjs/header';
// @ts-ignore
import Marker from '@editorjs/marker';
import { ROOT_URL } from './ROOT_URL';

export const EDITOR_JS_TOOLS = {
  embed: Embed,
  table: Table,
  marker: Marker,
  list: List,
  code: Code,
  linkTool: LinkTool,
  image: {
    class: Image,
    config: {
      endpoints: {
        byFile: `${ROOT_URL}post/add/image`, // Your backend file uploader endpoint
      },
    },
  },

  raw: Raw,
  header: Header,
};
