import React from "react";
import Nav from "./component/Nav";
import MusicState from "./context/state.jsx";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Musics from "./pages/Musics";
function App() {

  return (
    <MusicState>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" component={Musics} exact />
          {/* <Route path="/music" component={Musics} exact /> */}
        </Switch>
      </Router>
    </MusicState>
  );
}

export default App;
