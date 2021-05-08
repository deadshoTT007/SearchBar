import React from 'react'
import fb from './image/fbicon.png';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home'
import FlagIcon from '@material-ui/icons/Flag'
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'
import {Avatar,IconButton} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore' 
import {connect} from 'react-redux'
import './Header.css'

class Header extends React.Component {
    render(){
        const user=this.props.user
        console.log(user,"head")
        return (
            <div className="header">
                <div className="header__left">
                    <img src={fb} alt="fb"/>
                    <div className="header__input">
                    <SearchIcon/>
    <input type="text" placeholder="Search facebook"/>
                    </div>
                    </div>
                    <div className="header__middle">
                        <div className="header__option__active">
                            <HomeIcon fontSize="large"/>
                        </div>
    
                        <div className="header__option">
                            <FlagIcon fontSize="large"/>
                        </div>
    
                        <div className="header__option">
                            <SubscriptionsOutlinedIcon fontSize="large"/>                    
                       </div>
    
                        <div className="header__option">
                            <StorefrontOutlinedIcon fontSize="large"/>
                        </div>
    
                        <div className="header__option">
                            <SupervisedUserCircleIcon fontSize="large"/>
                        </div>
                    </div>
                    <div className="header__right">
                        <div className="header__info">
                            <Avatar src={user.photoURL}/>
                            <h4>{user.displayName}</h4>
                        </div>
                        <IconButton>
                            <AddIcon/>
                        </IconButton>
                        <IconButton>
                            <FlagIcon/>
                        </IconButton>
                        <IconButton>
                            <NotificationsActiveIcon/>
                        </IconButton>
                        <IconButton>
                            <ExpandMoreIcon/>
                        </IconButton>
                    </div>
                </div>
            
        )
    }
    
}
const mapStateToProps=state=>{
    return{
        user:state.user
    }
}

export default connect(mapStateToProps,null)(Header) 
