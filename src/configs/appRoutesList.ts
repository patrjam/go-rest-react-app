export const appRoutesList = {
  homeUrl: '/',
  postsUrl: '/posts',
  newPostUrl: '/posts/new',
  postDetail: '/posts/detail',
  postDetailId: '/posts/detail/:id',
  commentsUrl: '/comments',
  usersUrl: '/users',
};


export const getPostDetail = (id: number) => {
  return `${appRoutesList.postDetail}/${id}`
}
