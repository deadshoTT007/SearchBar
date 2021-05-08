import React from 'react'
import logo from './image/fb-logo (1).jpg'
import Button from './Button'
import './Login.css'
import {connect} from 'react-redux'
import {auth,provider} from './firebase'
import * as actions from './actionTypes'
 class Login extends React.Component {
     signIn=()=>{
        auth.signInWithPopup( provider).then(result=>{
            this.props.fbUser(result.user)
            console.log(result.user,"name")
        }).catch(err=>{
            alert(err.message)
        })
    }
componentDidMount=()=>{
console.log("userers",this.props.user)
}
    render(){
        console.log(this.props.user,"USER")
     
    

         return (
        <div className="container">
            <div className="img">
            <img src={logo} className="logo"/>
            <h1>Facebook by Manish</h1>
            </div>
            <Button type="submit" onClick={this.signIn}/>
            
        </div>
    )}
         }

         const mapStateToProps=state=>{
            return{
        user:state.user,
            }
        }

const mapDispatchToProps=dispatch=>{
    return{
        fbUser:(user)=>dispatch(actions.fbUser(user))

    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Login)

// export default Login