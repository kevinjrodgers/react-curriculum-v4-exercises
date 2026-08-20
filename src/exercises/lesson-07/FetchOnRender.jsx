import { useEffect, useState } from 'react';
import './Lesson07Styles.css';
import { getPosts } from './api';

export default function FetchOnRender() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    /*const fetchData = async() => {
        try {
          let myData = await getPosts();
          console.log(myData);
        } catch (error) {
        console.log(error);
        }
      }
      let myData = fetchData();
      setPosts(myData);
      */
    getPosts().then((result) => {
      setPosts(result);
    });
  }, []);

  console.log('GULP: ' + posts);
  console.log(posts[0]);

  return (
    <div className="root">
      <h1 className="heading">Fetch list of posts on render</h1>
      <div className="content">
        {posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
