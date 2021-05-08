import React, { Component } from 'react'
// import {connect, Connect} from 'react-redux'
import * as actions from './actions'
import './App.css';
import {NavLink} from 'react-router-dom'


import { connect } from 'react-redux'
const passwordRegex=RegExp("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$")
const emailRegex=RegExp( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

 class Signup extends Component {

state={
    firstName:null,
    lastName:null,
    email:null,
    password1:null,
    password2:null,
    formErrors:{
      firstName:"",
      lastName:"",
      email:"",
      password1:"",
      password2:""
    }
  }
  handleSubmit=(e)=>{
    e.preventDefault()
    if(this.formValid(this.state)){
      let {formErrors,...rest}=this.state
      this.props.onUserAdded(rest)
      let usersArray=[]
      usersArray.push(this.props.user)
      const users=localStorage.setItem("usersArray",JSON.stringify(usersArray))
      // this.props.onUsersAddedArray(usersArray)
  
      console.log(usersArray,"userArray")
      console.log(rest,"rr")
      let obj=Object.values(rest).forEach(val=>val==true && (val=""))
      console.log(obj,"obb")
      this.props.history.push('/Dashboard')
    }
    
  }
  
  handleChange=(e)=>{
    const{name,value}=e.target
  
    this.setState({[name]:value},()=>{
  
  let formErrors=this.state.formErrors
  let formdata=this.state;
  console.log("input", this.state.password2, this.state.password1)
  switch(name){
    case "firstName":
      formErrors.firstName=value.length<3&&value.length>0 ? "Minimum 3 characters required":""
      break;
      case "lastName":
        formErrors.lastName=value.length<3&&value.length>0?"Minimum 3 characters required":""    
        break;
        case "email":
          formErrors.email=emailRegex.test(value)?"":"Invalid email"
          break;
          case "password1":
            formErrors.password1= value.length>=8 && value.length>0 ? "":"Minimum 8 characters and atleast one number"
            break;
            case "password2":
            formErrors.password2=value.length>=8 && value.length>0  ? "":"Minimum 8 characters and atleast one number"
            formErrors.password2=formdata.password1==formdata.password2?"":"Password Didin't match"
            break;
            default:
              break;
  
  }
  this.setState({formErrors:formErrors})
  })}
  
   formValid=({formErrors , ...rest})=>{
    let valid=true;
    console.log(formErrors,"form")
    console.log(rest,"rest")
    if(formErrors)
    {Object.values(formErrors).forEach(val=>val.trim().length>0 && (valid= false ))}
    console.log(valid,"val")
    if(rest){
      console.log(rest,"valiii")
    let objvalid= Object.values(rest).forEach(val=> val==null && (valid=false))
    console.log(objvalid,"valio")
    console.log(valid,"validd")
  return valid;
    }
    
    // console.log(valid)
    // let form2={...form}
    // delete form2.formErrors
    // console.log(form2,"form2")
    // console.log(rest)
    
    return valid
    
  }
  
    render() {
        console.log(this.props.history,"history")
        console.log(this.state.formErrors,"gg")
        const valid=this.formValid(this.state)
    console.log(valid,"valid")
        console.log(this.state.formErrors,"formerrors")
        const {formErrors}=this.state
     console.log(formErrors,"fff")   
    
        
            return (
                <>
                  <div className="wrapper">
                  <div className="formWrapper">
              <h1>Create an Account</h1>
              <form onSubmit={this.handleSubmit} >
                <div className="nameWrapper">
                <div className="firstName">
                  <label for="firstname">First Name</label>
                  <input type="text" className={formErrors.firstName.length>0?"errorInput":null} placeholder="First Name" onChange={this.handleChange} name="firstName" />
                  {formErrors.firstName.length>0 && (<span className="error">{formErrors.firstName}</span>) }
                </div>
                
                <div className="lastName">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" className={formErrors.lastName.length>0?"errorInput":null} placeHolder="Last Name" onChange={this.handleChange} name="lastName"  />
                  {formErrors.lastName.length>0 && (<span className="error">{formErrors.lastName}</span>) }
                </div>
                </div>
                <div className="email">
                  <label htmlFor="email">Email</label>
                  <input type="email"className={formErrors.email.length>0?"errorInput":null} placeHolder="Enter your email" onChange={this.handleChange} name="email"/>
                  {formErrors.email.length>0 && (<span className="error">{formErrors.email}</span>) }
                </div>
                <div className="password1">
                  <label htmlFor="password1">Password</label>
                  <input type="password"className={formErrors.password1.length>0?"errorInput":null} name="password1" onChange={(e)=>this.handleChange(e)} placeHolder="Enter your Password"/>
                  {formErrors.password1.length>0 && (<span className="error">{formErrors.password1}</span>) }
                </div>
              <div className="password2">
                <label htmlFor="password2">Re-enter password</label>
                <input type="password"className={formErrors.password2.length>0?"errorInput":null} name="password2" onChange={(e)=>this.handleChange(e)} placeholder="Re-enter your Password"/>
                {formErrors.password2.length>0 && (<span className="error">{formErrors.password2}</span>) }
              </div>
              {/* <div className="button"> */}
              <button disabled={!valid?"disabled":null} >Create Account</button>
              {/* </div> */}
              <p>Already Have an <span><NavLink to="/Signin" exact >Account</NavLink> ?</span></p>
            </form>
                </div>
                </div>
            
                </>
                );
    }
}



  
    
    
   
  
  const mapStateToProps=state=>{
    return{
      user:state.formUser
    }
  }
  
  const mapDispatchToProps=dispatch=>{
    return{
      onUserAdded:(user)=>dispatch(actions.user(user)),
      // onUsersAddedArray:(user)=>dispatch(actions.usersArray(user))
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(Signup)