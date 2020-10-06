import React from "react";
import Home from "./Page/Home";
import "./App.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";
//import Profile from "./Page/Home/Profile";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profile" exact component={Home} />
        <Route
          component={() => {
            return <div>Pagina no encontrada 404</div>;
          }}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
