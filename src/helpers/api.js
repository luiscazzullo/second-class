export const getUser = async () => {
  const userId = Math.floor((Math.random() * 10) + 1);
  const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
  const response = await fetch(url);
  const user = await response.json();
  return user;
}

export const getPosts = async (userId) => {
  const url = `https://jsonplaceholder.typicode.com/comments?postId=${userId}`;
  const response = await fetch(url);
  const posts = await response.json();
  return posts;
}