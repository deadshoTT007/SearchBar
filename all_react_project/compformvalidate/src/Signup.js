import React, { Component } from 'react'
import Input from './Input'
import * as actions from './actions'
import './App.css'
import {NavLink} from 'react-router-dom'


import { connect } from 'react-redux'
// import {NavLink} from 'react-router-dom'
const emailRegex=RegExp( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);


 class Signup extends Component {

    state={
        formData:{
            firstName:{
                elementClass:{
                    label:"First Name",
                    className:"firstName"
                },
                elementConfig:{
                    type:"text",
                    placeholder:"First Name",
                    name:"firstName",
                    
                },
                value:"",
                valid:false,
                touched:false,
                validity:{
                    required:true,
                     minLength:3,
                    
                }
                
            },
            lastName:{
                elementClass:{
                    label:"Last Name",
                    className:"lastName"
                },
                elementConfig:{
                    type:"text",
                    placeholder:"Last Name",
                    name:"lastName",
                    
                },
                value:"",
                valid:false,
                touched:false,
                validity:{
                    required:true,
                     minLength:3
                }                
            },
            email:{
                elementClass:{
                    label:"Email",
                    className:"email",
                },
                elementConfig:{
                    type:"email",
                    placeholder:"Your Email",
                    name:"email",
                    
                },
                value:"",
                valid:false,
                touched:false,
                validity:{
                    required:true,
                    regex:emailRegex
                     
                }
                
            },
            password1:{
                elementClass:{
                    label:"Password",
                    className:"password1"
                },
                elementConfig:{
                    type:"password",
                    placeholder:"Password",
                    name:"password1",
                    
                },
                value:"",
                valid:false,
                touched:false,
                validity:{
                    required:true,
                    minLength:8
                     
                } 
            },
            password2:{
                elementClass:{
                    label:"Re-enter password",
                    className:"password2"
                },
                elementConfig:{
                    type:"password",
                    placeholder:"Re-Enter Password",
                    
                    name:"password2",
                    
                    
                },
                value:"",
                valid:false,
                validity:{
                    required:true,
                     minLength2:8
                }
        }
    },
}

checkValidity(value,rules){
    console.log(value,rules,"rules")
    let isValid=true;
    if(rules.required){
        isValid=value.trim()!=="" && isValid
        
    }
    if(rules.minLength){
        console.log(rules.minLength,"rulesmin")
        console.log(value.length,"vallength")
        isValid=value.length>=rules.minLength && (isValid)
        console.log(isValid,"min-length")

    }
    if(rules.regex){
        isValid=rules.regex.test(value) && isValid
        console.log(isValid,"regex")
    }
    if(rules.minLength2){
        isValid=(value.length >=8 && value==this.state.formData.password1.value) && (isValid)
    }
    return isValid
}
    
handleSubmit=(e)=>{
    e.preventDefault()
   let data={
       firstname:this.state.formData.firstName.value,
       email:this.state.formData.email.value,
       password:this.state.formData.password1.value,
       re_password:this.state.formData.password2.value,
       lastname:this.state.formData.lastName.value   }
       let dat={...data}
       console.log(dat,"data")
   this.props.onUserAdded(dat)
   let usersArray=[]
   usersArray.push(dat)
   console.log(usersArray,"user")
   localStorage.setItem("users",JSON.stringify(usersArray))
   this.props.history.push('/Dashboard')
}
   

inputChangeHandler=(e)=>{
    e.preventDefault()
const {value,name}=e.target;
// console.log(value,name,"val")
const updatedFormData={...this.state.formData};
const updatedFormElement={...updatedFormData[name]};
const updatedFormValid={...updatedFormElement.validity}
 updatedFormElement.value=e.target.value;
  updatedFormElement.valid=this.checkValidity(updatedFormElement.value,updatedFormValid)
 
 
 updatedFormData[name]=updatedFormElement;
 
 console.log("hhh",updatedFormElement,updatedFormData,name)
this.setState({formData:updatedFormData}, 
    console.log(this.state.formData[name].valid,"valid")
    // console.log("hhhhhh",updatedFormElement,updatedFormData,name)

    )
}

  


    render() {
        let disabled=false;
        Object.values(this.state.formData).forEach(val=>val.valid===false && (disabled=true))
        
        // Object.values(this.state.formData).forEach(val=> console.log(val.valid,"vallw"))


    
    
        

let formElementArray=[];
for(let key in this.state.formData){
    // console.log("aalu",this.state.formData[key])
    formElementArray.push({id:key,config:this.state.formData[key]})
   
    // console.log(formElementArray,"array")
}
console.log(formElementArray,"array")
// console.log("hhhelllo", this.state,formElementArray)

let input=(formElementArray.map(eachFormElement=>{
    return(
        <Input changed={this.inputChangeHandler}  valid={eachFormElement.config.valid}   
        id={eachFormElement.id} value={eachFormElement.config.value} 
        label={eachFormElement.config.elementClass.label} className={eachFormElement.config.elementClass.className} 
        inputData={eachFormElement.config.elementConfig} />
    )
}))

//         let input=(<>
//             <Input  className={this.state.formData.firstName.elementClass.className} inputData={this.state.formData.firstName.elementConfig} inputType={this.state.formData.firstName.elementConfig.type}/>
//             <Input  className={this.state.formData.firstName.elementClass.className} inputData={this.state.formData.firstName.elementConfig} inputType={this.state.formData.firstName.elementConfig.type}/>

// </>
//         )

        return (
            <div className="wrapper">
                  <div className="formWrapper">
              <h1>Create an Account</h1>
              <form onSubmit={this.handleSubmit} >
                  
              {input}
              
              <button disabled={disabled} >Create Account</button>
            
              {/* <p>Already Have an <span><NavLink to="/Signin" exact >Account</NavLink> ?</span></p> */}
            </form>
                </div>
                </div>
        )
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
