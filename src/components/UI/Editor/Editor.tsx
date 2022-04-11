import React, { FC, useEffect } from 'react';
import EditorJS, { OutputData } from '@editorjs/editorjs';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ImageTool from '@editorjs/image';

interface EditorProps {
  onChange: (blocks: OutputData['blocks']) => void;
  initialBody: OutputData['blocks'];
}
const PostEditor: FC<EditorProps> = ({ onChange, initialBody }) => {
  useEffect(() => {
    const editor = new EditorJS({
      tools: {
        image: {
          class: ImageTool,
          config: {
            endpoints: {
              byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
              byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
            },
          },
        },
      },
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
