import React, { useState, useEffect } from "react";
import { useParams, RouteComponentProps, Link } from "react-router-dom";
import Fetch from "./Fetch";

let SinglePost: React.FC<ISinglePostProps> = ({
  match: {
    params: { id }
  }
}) => {
  const [user, setUser] = useState("");
  const [text, setText] = useState("");

  let handleChange = (e: string, id: string) => {
    if (id === "user") {
      setUser(e);
    } else if (id === "text") {
      setText(e);
    }
  };

  let handleClick = () => {
    if (user !== "user" && text !== "text") {
      Fetch(
        {
          user: user,
          text: text
        },
        `/api/Posts/${id}`,
        "PUT"
      );
    }
  };

  let handleDelete = () => {
    if (user !== "user" && text !== "text") {
      Fetch(
        {
          user: user,
          text: text
        },
        `/api/Posts/${id}`,
        "DELETE"
      );
    }
  };

  let postPost = async () => {
    try {
      let res = await fetch(`/api/Posts/${id}`);
      let apost = await res.json();
      setUser(apost.user);
      setText(apost.text);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    postPost();
  }, []);

  return (
    <form>
      <div className="form-group col-sm-4">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="user"
          value={user}
          onChange={e => handleChange(e.target.value, "user")}
        />
        <small id="userMsg" className="form-text text-muted">
          We plan to stalk you.
        </small>
      </div>
      <div className="form-group col-sm-4">
        <label htmlFor="msg">Msg</label>
        <input
          type="text"
          className="form-control"
          id="text"
          value={text}
          onChange={e => handleChange(e.target.value, "text")}
        />
      </div>
      <Link to="/">
        <button
          className="btn btn-primary ml-3"
          onClick={() => {
            handleClick();
          }}
        >
          Save Edit
        </button>
      </Link>
      <Link to="/">
        <button
          className="btn btn-primary ml-3"
          onClick={() => {
            handleDelete();
          }}
        >
          Delete
        </button>
      </Link>
    </form>
  );
};

export interface ISinglePostProps
  extends RouteComponentProps<{ id: string }> {}

export interface ISinglePostState {}

export default SinglePost;
