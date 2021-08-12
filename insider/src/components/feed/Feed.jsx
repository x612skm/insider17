import { useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import axios from "axios";


// {import { Posts } from "../../dummyData";}

export default function Feed() {
  const [posts,setPosts] = useState([]);
  
  useEffect(() => {
    
      const res =  axios.get("http://localhost:8801/api/posts/timeline/610d95a1c2f0c");
      console.log(res);
 
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