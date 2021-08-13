import { useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import axios from "axios";


// {import { Posts } from "../../dummyData";}

export default function Feed() {
  const [posts,setPosts] = useState([]);

  
  useEffect(() => {
      const fetchPosts = async() => {
      const res =await axios.get("posts/timeline/6102f4693fdb30145fc86d3e")
      setPosts(res.data)
      };
      fetchPosts();
  },[])

  return (
    <div className="feed">
      {/* <input type="text" onChange={e=>setText(e.target.value)}/> */}
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}