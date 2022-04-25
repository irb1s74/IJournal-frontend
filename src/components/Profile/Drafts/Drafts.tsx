import React, { FC, useEffect, useState } from 'react';
import { Stack } from '@mui/material';
import { IPost } from '../../../models/IPost';
import Card from '../../UI/NewsCard/Card';
import ProfileService from '../../../api/ProfileService';

interface ProfileDraftsProps {
  token: string;
}

const ProfileDrafts: FC<ProfileDraftsProps> = ({ token }) => {
  const [posts, setPosts] = useState<IPost[]>([]);

  const initialRequest = async () => {
    const response = await ProfileService.getDrafts(token);
    if (response.data) {
      setPosts(response.data);
    }
  };

  useEffect(() => {
    initialRequest();
  }, []);
  return (
    <Stack direction='column' alignItems='center' spacing={5}>
      {posts.length &&
        posts.map((post: IPost, index) => (
          <Card key={`${index}_${post.id}`} post={post} />
        ))}
    </Stack>
  );
};

export default ProfileDrafts;
