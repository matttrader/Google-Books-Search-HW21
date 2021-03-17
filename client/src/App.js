import React from "react";
import {BrowserRouter as Router,Route} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import Results from "./pages/Results";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/search" component={Results} />
        </Wrapper>
      </div>
    </Router>
  );
}


export default App;
