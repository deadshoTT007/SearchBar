import logo from './logo.svg';
import './App.css';
import PersonInfo from './Component/PersonInfo';
import React from 'react';
import Details from './Component/Details';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function App() {
  const [id, setId] = React.useState('')
  const fetchId = (id) => {
    setId(id)
  }
  return (
    <div className="App">
      <Switch>
        <Router>
          <Route path="/" exact component={() => (<PersonInfo fetchId={fetchId} />)} />
          <Route path="/details" exact component={() => (<Details id={id} />)} />
        </Router>
      </Switch>
    </div>
  );
}

export default App;
