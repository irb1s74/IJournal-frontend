import React, { useState } from 'react';
import { Editor, EditorState, ContentBlock } from 'draft-js';
import EditorBox from './widget/EditorBox';

const myBlockRenderer = (contentBlock: ContentBlock) => {
  const type = contentBlock.getType();
  if (type === 'atomic') {
    return {
      component: EditorBox,
      editable: true,
      props: {
        foo: 'bar',
      },
    };
  }
  return {
    component: EditorBox,
    editable: true,
    props: {
      foo: 'bar',
    },
  };
};

const PostEditor = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const handleChangeEditor = (e: EditorState) => {
    setEditorState(e);
    // console.log(convertToRaw(e.getCurrentContent()));
  };

  return (
    <div className='editor'>
      <Editor
        editorState={editorState}
        onChange={handleChangeEditor}
        blockRendererFn={(e) => myBlockRenderer(e)}
        // blockRenderMap={extendedBlockRenderMap}
        // blockRenderMap={blockRenderMap}
      />
    </div>
  );
};

export default PostEditor;
