import { useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import axios from "axios";


// {import { Posts } from "../../dummyData";}

export default function Feed() {
  const [posts,setPosts] = useState([])
  
  useEffect(() => {
    const fetchPosts = async() => {
      const res = await axios.get("posts/timeline/610d95a1c2f0ca583ebc95e9l");
      console.log(res);
    };
    fetchPosts();
  },[]); 

  return (
    <div className="feed">
 
      <div className="feedWrapper">
        <Share />
        {/* {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))} */}
      </div>
    </div>
  );
}