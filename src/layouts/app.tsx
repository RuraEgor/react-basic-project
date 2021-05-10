import React, { FunctionComponent } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import LoginLayout from './LoginLayout';
import TasksBoardLayout from './TasksBoardLayout';
import './app.css';


const App: FunctionComponent = () => {
  return (
      <Router>
        <div>
          <Switch>
            <Route path="/tasksboard">
              <TasksBoardLayout />
            </Route>
            <Route path="/">
              <LoginLayout />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
