import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./pages/home";
import Details from "./pages/details";
import Audio from "./components/audio";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Audio />
        <main>
          <header>
            <Link to="/">
              <h1>Star Wars Search</h1>
            </Link>
          </header>
          <Switch>
            <Route path="/:resource/:id">
              <Details />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </Router>
    </Provider>
  );
}

export default App;
