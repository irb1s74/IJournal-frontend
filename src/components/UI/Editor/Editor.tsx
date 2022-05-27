import React, { FC, useEffect } from 'react';
import EditorJS, { OutputData } from '@editorjs/editorjs';
import { EDITOR_JS_TOOLS } from '../../../helpers/editorTools';
import { translate } from '../../../helpers/i18nEditor';

interface EditorProps {
  onChange?: (blocks: OutputData['blocks']) => void;
  initialBody?: OutputData['blocks'];
  readOnly?: boolean;
}

const Editor: FC<EditorProps> = ({
  onChange = () => null,
  initialBody = [],
  readOnly = false,
}) => {
  useEffect(() => {
    const editor = new EditorJS({
      tools: EDITOR_JS_TOOLS,
      i18n: translate,
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

export default Editor;
