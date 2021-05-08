import React, { Component } from 'react'
import './App.css'
import {NavLink} from 'react-router-dom'


 class Signin extends Component {

state={
    email:null,
    password:null,
    errors:{
        email:'',
        password:''
    }
}

     handleSubmit=(e)=>{
         e.preventDefault()
         const items=JSON.parse(localStorage.getItem("usersArray"))
         console.log(items[0].email,items[0].password1)

         console.log(this.state.email,this.state.password)

if(this.state.email==items[0].email && this.state.password==items[0].password1){
    this.props.history.push('Dashboard')
}
     
    // this.setState({},()=>{
    //      if(this.state.email==true && this.state.email!==items.email){
    //         this.state.errors.email="Invalid Email"
    //     }
    //     else if(this.state.password!=items.password){
    //         this.state.errors.password="Invalid Password"
    //     }
    // })

    


     }
     handleChange=(e)=>{
const{name,value}=e.target
this.setState({[name]:value})
     }


    
    render() {
        console.log(this.state,"state")
        // const items=JSON.parse(localStorage.getItem("usersArray"))
        // console.log(items,"items")
        
        return (
            
            <div className="wrapper">
            <div className="formWrapper">
        <h1>Sign IN</h1>
        <form onSubmit={this.handleSubmit} >
          <div className="email">
            <label htmlFor="email">Email</label>
            <input type="email" placeHolder="Enter your email" onChange={this.handleChange} name="email"/>
            {this.state.errors.email.length>0 && (<span className="error">{this.state.errors.email}</span>) }
          
          </div>
          <div className="password1">
            <label htmlFor="password1">Password</label>
            <input type="password"name="password" onChange={(e)=>this.handleChange(e)} placeHolder="Enter your Password"/>
            {this.state.errors.password.length>0 && (<span className="error">{this.state.errors.password}</span>) }

          </div>
          <button >Login</button>
          <p>Create a <span><NavLink to="/" exact >Account</NavLink> ?</span></p>

              {/* </div> */}
          </form>
          </div>
          </div>
          
        )
    }
}
export default Signin
