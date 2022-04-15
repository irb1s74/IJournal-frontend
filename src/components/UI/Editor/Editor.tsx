import React, { FC, useEffect } from 'react';
import EditorJS, { OutputData } from '@editorjs/editorjs';
import { ROOT_URL } from '../../../helpers/ROOT_URL';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ImageTool from '@editorjs/image';

interface EditorProps {
  onChange?: (blocks: OutputData['blocks']) => void;
  initialBody?: OutputData['blocks'];
  readOnly?: boolean;
}
const PostEditor: FC<EditorProps> = ({
  onChange = () => null,
  initialBody = [],
  readOnly = false,
}) => {
  useEffect(() => {
    const editor = new EditorJS({
      tools: {
        image: {
          class: ImageTool,
          config: {
            endpoints: {
              byFile: `${ROOT_URL}post/add/image`, // Your backend file uploader endpoint
              byUrl: `http://localhost:5000/posts/62cf9ced-86b5-4241-bf82-b46be667e507.jpg`, // Your endpoint that provides uploading by Url
            },
          },
        },
      },
      readOnly,
      holder: 'editorjs',
      async onChange() {
        const { blocks } = await editor.save();
        onChange(blocks);
      },
      data: {
        blocks: initialBody,
      },
    });
    return () => {
      editor.isReady.then(() => {
        editor.destroy();
      });
    };
  }, []);
  return <div id='editorjs' />;
};

export default PostEditor;
