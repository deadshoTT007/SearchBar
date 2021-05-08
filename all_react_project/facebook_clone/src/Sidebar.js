import React from 'react'
import SidebarRow from './SideBarRow'
import LocalHospitalIcon from "@material-ui/icons/LocalHospital"
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import PeopleIcon from '@material-ui/icons/People'
import ChatIcon from '@material-ui/icons/Chat'
import StorefrontIcon from '@material-ui/icons/Storefront'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import manish from './image/118086196_2699685770270804_3247997424088888290_n.jpg'
import { ExpandMoreOutlined } from '@material-ui/icons'
import {connect} from 'react-redux'
import SideBarRow from './SideBarRow'
import './Sidebar.css'
class Sidebar extends React.Component {
render(){
    const user=this.props.user
    return (
        <div className="sidebar">
            {/* Icon should be capital letter because we are passing the component through props so it should 
            be capital because components are always in capital blocks */}
 <SideBarRow src={manish} title={user.displayName}/>
 <SidebarRow Icon={LocalHospitalIcon} title="Covid-19 Information Center"/>
 <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
 <SidebarRow Icon={PeopleIcon} title="Friends"/>
 <SidebarRow Icon={ChatIcon} title="Messenger"/>
 <SidebarRow Icon={StorefrontIcon} title="MarketPlace"/>
 
 <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
 <SidebarRow Icon={ExpandMoreOutlined} title="MarketPlace"/>
 <SidebarRow/>
        </div>
     )
 }
}
    
const mapStateToProps=state=>{
    return{
        user:state.user
    }
}
export default connect(mapStateToProps,null)(Sidebar)
