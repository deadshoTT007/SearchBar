import React from 'react'
import Signup from './Signup'
import Dashboard from './Dashboard'
import Signin from './Signin'
import {Route,Switch} from 'react-router-dom'
class App extends React.Component{
  render(){
    return(
      <>
      <Switch>
      <Route path="/" exact component={Signup}/>
      <Route path="/Dashboard" exact component={Dashboard}/>
      <Route path="/Signin" exact component={Signin}/> 
      </Switch>
      </>
    )
  }

}
export default App;
