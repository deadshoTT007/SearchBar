import React from 'react'
import './App.css'
import './input.css'

function Input(props) {
    console.log(props.value,"propsvalue")
    
    console.log(props.inputType,"inputType")
    console.log(props.valid,"valid")
    console.log(props.id,"key")
    console.log(props.valid,"propsvalid")
    let message=null;
    console.log(message,"message")
    switch(props.id){
        case "firstName":
            message= (props.valid!=true && props.value.length!=0)? "Minimun 3 characters Required":null
            break;
            case "lastName":
                message=(props.valid!=true && props.value.length!=0)? "Minimum 3 characters Required":null
                break;
                case "email":
                    message=(props.valid!=true && props.value.length!=0)? "Invalid email":null
                    break;
                    case "password1":
                        message=(props.valid!=true && props.value.length!=0)? "Minimum 8 characters Required":null
                        break;
                        case "password2":
                        message=(props.valid!=true && props.value.length!=0)? "Password Didn't match":null
                        break;
            default:
                message=null

    }
let inputElement=null;
    switch(props.inputData.type){
    case 'text':
        
inputElement=(<div className={props.className}>
    <label for={props.className}>{props.label}</label>
    <input {...props.inputData} onChange={props.changed}/>
    {message?<span>{message}</span>:null}
</div> 
 
        )
        break;
        case 'email':
            
                inputElement=(<div className={props.className}>
                    <label for={props.className}>{props.label}</label>
                    <input   {...props.inputData} onChange={props.changed}   />
                    {message?<span>{message}</span>:null}
                </div>
            )
            break;
            case 'password':
                inputElement=(<div className={props.className}>
                    <label for={props.className}>{props.label}</label>
                    <input   {...props.inputData} onChange={props.changed}/>
                    {message?<span>{message}</span>:null}
                    {props.errorMessage?<span>{props.errorMessage}</span>:null}
                </div>
            )
            break;
            default:
                inputElement=<input/>
    }
    return(
        <>
        {inputElement}
        
        </>
    )
    
}

export default Input
