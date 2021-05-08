import React, { Component } from 'react'
import './App.css'
import {withRouter} from 'react-router-dom'

class Dashboard extends Component {

submit=(e)=>{
e.preventDefault()
this.props.history.push('/Signin')


}

    render() {
        console.log(this.props.history)
        return (
            <div className="dashboard">
                {/* Welcome to Your display panel */}
                
                <button className="Logout" onClick={this.submit} > Logout</button>
                
            </div>
        )
    }
}
export default withRouter(Dashboard);
