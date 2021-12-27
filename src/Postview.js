import React, {useState,useEffect } from 'react';
import './Postview.css'



const Postview=()=> {
  const [posts,setPost]=useState([]);
  useEffect(()=>
  {
    fetch("http://localhost:3000/user").then((res)=>res.json()).then((responseData)=>setPost(responseData))
  },[posts])

 

  
  return (
    <div className="site-container">
    <hr/>
    <div className="header">
    
    <h2>Instaclone</h2>
    <i class="fa fa-camera"></i>
    </div>
    <hr/>
    
    {posts.map((post)=>
      <div className="card">
      <div className="post-header">
      <span className="posterh"><b>{post.name}</b></span>
      <br/>
      <span className="posterh posterlocation">{post.location}</span>
      <div className="threedots"><b>...</b></div>
      </div>
      <img src={post.PostImage} alt="sampleimage"/>
      <div className="symbol"><i className="fa fa-heart-o"></i>
      <i className="fa fa-paper-plane-o" ></i></div><br/>
      

      <div className="likes">{post.likes} likes</div>
      <div className="date">{post.date}</div><br/>
      <div className="desc">{post.description}</div>
    </div>
    )}
    
    
    </div>
  );
}

export default Postview;
