import { apiEndpoints } from '../configs/apiEndpoints';
import { customFetch } from './../customFunctions/customFetch';

export type PostProps = {
  id: number;
  user_id: number;
  title: string;
  body: string;
};

export type Post = {
  post: PostProps;
};

export const getPost = async (id: any) => {
  return await customFetch<Post['post']>(
    `${apiEndpoints.POSTS_V2}/${id}`,
    {
      method: 'GET',
    }
  );
};
