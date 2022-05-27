import { createReactEditorJS } from 'react-editor-js';
import { EDITOR_JS_TOOLS } from '../../../helpers/editorTools';
import { OutputData } from '@editorjs/editorjs';
import { FC } from 'react';

interface EditorProps {
  onChange?: (blocks: OutputData['blocks']) => void;
  initialBody?: OutputData['blocks'];
  readOnly?: boolean;
}

const TestEditor: FC<EditorProps> = ({
  onChange = () => null,
  initialBody = [],
  readOnly = false,
}) => {
  const ReactEditorJS = createReactEditorJS();
  return <ReactEditorJS onInitialize={onChange} tools={EDITOR_JS_TOOLS} />;
};
export default TestEditor;
