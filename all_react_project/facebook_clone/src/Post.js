import React from 'react'
import {Avatar} from '@material-ui/core'
import './Post.css'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import NearMeIcon from '@material-ui/icons/NearMe'
import {ExpandMoreOutlined} from '@material-ui/icons'


function Post({profilePicture,image,username,timestamp,message}) {
    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={profilePicture} className="post__avatar"/>
                <div className="post__topInfo">
                <h3>{username}</h3>
                {/* <p>{ timestamp}</p> */}
                </div>

            </div>
            <div className="post__bottom">
                <p>{message}</p>
                </div>
                <div className="post__image">
                    {image && <img  className="image" src={image} alt="image"/>
}
                 </div>
                 <div className="post__options">
                     <div className="post__option">
                         <ThumbUpIcon/>
                         <p>Like</p>
                     </div>
                     <div className="post__option">
                         <ChatBubbleOutlineIcon/>
                         <p>Comment</p>
                     </div>
                     <div className="post__option">
                         <NearMeIcon/>
                         <p>Share</p>
                     </div>
                     <div className="post__option">
                         <AccountCircleIcon/>
                         <ExpandMoreOutlined/>
                     </div>
                     
                 </div>
            </div>
        
    )
}

export default Post
