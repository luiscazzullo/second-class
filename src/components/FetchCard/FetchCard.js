import { useEffect, useState } from 'react';
import { getUser, getPosts } from '../../helpers/api';

const FetchCard = () => {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  const updateUser = async () => {
    const newUser = await getUser();
    setUser(newUser);
  }

  const updatePosts = async () => {
    const newPosts = await getPosts(user.id);
    setPosts(newPosts);
  }

  useEffect(() => {
    updateUser();
  }, [])

  useEffect(() => {
    updatePosts();
  }, [user])

  return (
    <>
      <button onClick={updateUser}>Cambiar usuario</button>
      <section>
        <h3>{user.name}</h3>
        <h3>{user.email}</h3>
      </section>
      <section>
        <h2>Posts de usuario: {user.id}</h2>
        <ul>
          {posts.map(post => (
            <li key={post.id}>{post.name}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
 
export default FetchCard;