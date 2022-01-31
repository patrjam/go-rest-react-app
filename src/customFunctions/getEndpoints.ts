import { PUBLIC_API } from "../configs/apiEndpoints";

export const getUserPostsUrl = (userId?: string) => {
  return `${PUBLIC_API}/users/${userId}/posts`;
};
