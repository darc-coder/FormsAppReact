import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import FormContext from "./formContext";
import FormGroup from "./formGroup";
import "./App.css";

function App() {

  return (
    <FormContext>
      <div className="App">
        <header className="App-header">
          <span className="App-link">Forms App</span>
        </header>
        <main>
          <Router>
            <Switch>
              <Route exact path="/">
                <Redirect to="/wizard/page-1" />
              </Route>
              <Route exact path={"/wizard/page-1"}>
                <FormGroup page={1} />
              </Route>
              <Route path={["/wizard/page-2"]}>
                <FormGroup page={2} />
              </Route>
            </Switch>
          </Router>
        </main>
      </div>
    </FormContext>
  );
}

export default App;
