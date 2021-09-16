import React from "react";
import HeaderNav from "./Components/HeaderNav";
import HomeScreen from "./Components/HomeScreen";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderNav />
        <Switch>
          <Route path="/" exact component={HomeScreen} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
