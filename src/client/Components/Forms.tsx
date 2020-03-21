import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Fetch from "./Fetch";

const Forms: React.FC<IFormsProps> = props => {
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
    if (user !== "" && text !== "") {
      Fetch(
        {
          user: user,
          text: text
        },
        "/api/Posts",
        "POST"
      );
    }
  };

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
          Submit
        </button>
      </Link>
    </form>
  );
};

export interface IFormsProps {}

export interface IFormsState {}

export default Forms;
