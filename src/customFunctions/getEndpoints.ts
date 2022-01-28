export const getUserPostsUrl = (userId?: string) => {
  const PUBLIC_API = "https://gorest.co.in/public/v1";

  return `${PUBLIC_API}/users/${userId}/posts`;
};
