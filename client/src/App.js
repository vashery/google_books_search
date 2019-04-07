import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SavedBooks from "./pages/SavedBooks";
import SearchBooks from "./pages/SearchBooks";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={SearchBooks} />
          <Route exact path="/searchbooks" component={SearchBooks} />
          <Route exact path="/savedbooks" component={SavedBooks} />
          <Route component={SearchBooks} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
