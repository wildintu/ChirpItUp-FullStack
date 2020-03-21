import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Posts: React.FC<IPostsProps> = props => {
    const [post, setPost] = useState([]);
  
    let grabPosts = async () => {
      try {
        let r = await fetch("/api/posts");
        let post = await r.json();
        postArray(post);
      } catch (error) {
        console.log(error);
      }
    };
  
    let postArray = (post: any) => {
      let keys = Object.keys(post);
      let arr = keys.map((element) => {
        return post[element];
      });
  
      let cards: JSX.Element[] = arr.map((element, index) => {
        return (
          <div className="card col-sm-4" key={index}>
            <div className="card-body">
              <h5 className="card-title">{element.user}</h5>
              <p className="card-text">{element.text}</p>
              <Link to={`/Posts/${element.id}/admin`}>
                <button
                  type="button"
                  className="btn btn-info"
                >
                  Admin Settings
                </button>
              </Link>
            </div>
          </div>
        );
      });
      setPost(cards);
    };
  
    useEffect(() => {
      grabPosts();
    }, []);
  
    return (
      <div>
        <Link to="/Forms" className="btn btn-success">
          Post to API
        </Link>
        {/* calling this.state.chirp */}
        {post}
      </div>
    );
  };
  
  export interface IPostsProps {}
  
  export interface IPostsState {
    post: string;
  }
  
  export default Posts;