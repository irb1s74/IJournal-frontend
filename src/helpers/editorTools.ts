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
        byUrl: `http://localhost:5000/posts/62cf9ced-86b5-4241-bf82-b46be667e507.jpg` // Your endpoint that provides uploading by Url
      }
    }
  },

  raw: Raw,
  header: Header
};

// {post.data.entry?.map((obj) =>
//   obj.type === 'paragraph' ? (
//       <Typography
//         key={obj.id}
//     dangerouslySetInnerHTML={{ __html: obj.data.text }}
//   />
// ) : (
//   obj.type === 'image' && (
//     <CardMedia
//       key={obj.id}
//   component='img'
//   height='194'
//   image={`${obj.data.file.url}`}
//   alt={obj.data.caption}
//   />
// )
// )
// )}

// <Blocks data={{ time: 10, version: '1321', blocks: post.data.entry }} />
