import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Forms from "./Components/Forms";
import Posts from "./Components/Posts"
import SinglePost from "./Components/SinglePost"

const App: React.FC<IAppProps> = props => {
  return (
    <Router>
      <Switch>
        <Route exact path="/Forms" component={ Forms } />
        <Route exact path="/Posts/:id/admin" component={ SinglePost } />
        <Route path="/" component={ Posts } />
      </Switch>
    </Router>
  );
};

export interface IAppProps {}

export interface IAppState {}

export default App;
