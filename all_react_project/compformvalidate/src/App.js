
import './App.css';
import Signup from './Signup'
import {Route,Switch} from 'react-router-dom'
import Signin from './Signin'

import Dashboard from './Dashboard.js'

const App = ()=> {
  return (
    <Switch>
    <div className="App">
    <Route path="/" exact component={Signup}/>
    <Route path="/Dashboard" exact component={Dashboard}/>  
    <Route path="/Signin" exact component={Signin}/> 
  
    </div>
    </Switch>
  );
}

export default App;
