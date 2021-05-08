import React from 'react'
import {Avatar} from '@material-ui/core'
import {connect} from 'react-redux'
import './Sidebar.css'
// function SidebarRow({src,Icon,title}) {

class SidebarRow extends React.Component{
    render(){
        const user=this.props.user
        const {src,Icon,title}=this.props
        return (
            <div className="sidebarRow">
                {src && <Avatar src={user.photoURL}/>}
                {Icon && <Icon/> }
                <h4>{title}</h4>
            </div>
        )
    }
}
const mapStateToProps=state=>{
    return{
    user:state.user
}
}
    


export default connect(mapStateToProps,null)(SidebarRow)
