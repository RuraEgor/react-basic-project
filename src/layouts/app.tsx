import React, { FunctionComponent } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Login from './components/Login';
import Manager from './components/Manager';
import './app.css';

const App: FunctionComponent = () => {
  return (
      <Router>
        <div>
          <Switch>
            <Route path="/manager">
              <Manager />
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
