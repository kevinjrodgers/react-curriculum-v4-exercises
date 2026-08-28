import './Lesson07Styles.css';
import { getSinglePost } from './api';
import { useState, useRef } from 'react';

export default function FetchOnClick() {
  const [myPost, setMyPost] = useState('');

  async function handleClick() {
    let myResultPost = await getSinglePost(1);
    setMyPost(myResultPost);
  }

  return (
    <div className="root">
      <h1 className="heading">Fetch single post on click</h1>
      {/*<button type="button" onClick={() => setMyPost(getSinglePost(1))}>Get post</button>*/}
      <button type="button" onClick={handleClick}>
        Get post
      </button>
      <div className="content">
        {myPost ? (
          <>
            <h2>{myPost.title}</h2>
            <p>{myPost.body}</p>
          </>
        ) : (
          <p>
            TODO: Replace me with fetched data when the <code>Get post</code>{' '}
            button is clicked
          </p>
        )}
      </div>
    </div>
  );
}
