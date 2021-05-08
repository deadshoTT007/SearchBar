import './App.css';
import React from 'react'

import Header from './Header';
import Sidebar from './Sidebar'
import Feed from './Feed'
// import { Widgets } from '@material-ui/icons';
import Widgets from './Widgets'
import {connect} from 'react-redux'
import Login from './Login'
import Spinner from './Spinner'
 class App extends React.Component {
render(){
  const user=this.props.user;
  console.log(user,"act")
  return (
    
    <div className="App">
      { !user ?(<Login/>):( 
      <>  
      <Header/> 
<div className="app__body">
  {/* Display flex in row */}
<Sidebar/>   
<Feed/>
{/* <Spinner/> */}
<Widgets/>
</div>
</>
)}

    </div>
    
  );
      }
}
const mapStateToProps=state=>{
  return{
    user:state.user
  }
}

export default connect(mapStateToProps,null)(App);
