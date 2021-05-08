import React, { Component } from 'react'
import './App.css'
import {NavLink} from 'react-router-dom'
import Input from './Input'

const emailRegex=RegExp( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

 class Signin extends Component {

state={
    formData:{
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

}
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
    

     
     handleChange=(e)=>{
        const {value,name}=e.target;
        console.log(value,name,"vallll")
        const updatedFormData={...this.state.formData};
        const updatedFormElement={...updatedFormData[name]};
         updatedFormElement.value=e.target.value;
          updatedFormElement.valid=this.checkValidity(updatedFormElement.value,updatedFormData[name].validity)
         
         
         updatedFormData[name]=updatedFormElement;
         
         console.log("hhh",updatedFormElement.value,updatedFormData,name)
        this.setState({formData:updatedFormData}, 
            // console.log(this.state.formData[name].valid,"valid")
            // console.log(this.state.formData,"formData")
            // console.log("hhhhhh",updatedFormElement,updatedFormData,name)
            console.log(this.state.formData.password1.value,"value")
        
            )
     }
     handleSubmit=(e)=>{
        e.preventDefault()
        const items=JSON.parse(localStorage.getItem("users"))
        console.log(items[0].email,items[0].password,"email password")
        console.log(this.state.formData.email.value,this.state.formData.password1.value)
if(this.state.formData.email.value==items[0].email && this.state.formData.password1.value==items[0].password){
   this.props.history.replace('Dashboard')
   console.log("Success")
}

    }
    
    
    render() {
        const items=JSON.parse(localStorage.getItem("users"))
let disable=false;
let errorMessage="";
        if(this.state.formData.email.value!=items[0].email || this.state.formData.password1.value!=items[0].password){
          disable=true;
          if(this.state.formData.password1.value!=0){
          errorMessage="Password didn't match"
          }   
        }
 

        let formElementArray=[];
        for(let key in this.state.formData){
            // console.log("aalu",this.state.formData[key])
            formElementArray.push({id:key,config:{...this.state.formData[key]}})
           
            // console.log(formElementArray,"array")
        }
        console.log(formElementArray,"array")
        // console.log("hhhelllo", this.state,formElementArray)
        
        let input=(formElementArray.map(eachFormElement=>{
            return( 
                <Input errorMessage={errorMessage} changed={this.handleChange}  valid={eachFormElement.config.valid}   
                id={eachFormElement.id} value={eachFormElement.config.value} 
                label={eachFormElement.config.elementClass.label} className={eachFormElement.config.elementClass.className} 
                inputData={eachFormElement.config.elementConfig} />
            )
        }))


        return (
            
            <div className="wrapper">
            <div className="formWrapper">
        <h1>Sign IN</h1>
        <form onSubmit={this.handleSubmit} >
         {input}
          <button disabled={disable} >Login</button>
          <p>Create a <span><NavLink to="/" exact >Account</NavLink> ?</span></p>

              {/* </div> */}
          </form>
          </div>
          </div>
          
        )
    }
}
export default Signin
