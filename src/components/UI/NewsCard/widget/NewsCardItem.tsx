import React, { FC, useState } from 'react';
import { CardMedia } from '@mui/material';
import { IBlock } from '../../../../containers/Newsline/types';
import { ItemWrapper } from '../Card.styled';
import { Editor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';

const NewsCardItem: FC<{ data: IBlock }> = ({ data }) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  console.log(JSON.stringify(editorState));
  if (data.type === 'image') {
    return <CardMedia component='img' height='350' image={data.render} />;
  }
  if (data.type === 'text') {
    return (
      <ItemWrapper>
        <Editor editorState={editorState} onChange={setEditorState} />
      </ItemWrapper>
    );
  }
  return <div />;
};

export default NewsCardItem;
