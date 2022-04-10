import React, { FC, useState } from 'react';
import { CardMedia } from '@mui/material';
import { IBlock } from '../../../../containers/Popular/types';
import { ItemWrapper } from '../Card.styled';
import { Editor, EditorState } from 'draft-js';
import { convertFromHTML } from 'draft-convert';

const NewsCardItem: FC<{ data: IBlock }> = ({ data }) => {
  if (data.type === 'image') {
    return <CardMedia component='img' height='350' image={data.render} />;
  }
  if (data.type === 'text') {
    return (
      <ItemWrapper>
        <Editor
          readOnly
          editorState={EditorState.push(
            EditorState.createEmpty(),
            convertFromHTML(data.render),
            'adjust-depth'
          )}
          onChange={() => null}
        />
      </ItemWrapper>
    );
  }
  return <div />;
};

export default NewsCardItem;
