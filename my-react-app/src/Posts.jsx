// load post data  home work
import { useState } from "react";
import { useEffect } from "react";
import Post from "./Post";
export default function posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div>
      <p>posts:{posts.length}</p>
      {posts.map((post) => (
        <Post post={post}></Post>
      ))}
    </div>
  );
}
