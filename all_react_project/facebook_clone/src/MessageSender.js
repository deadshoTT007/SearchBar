import React from 'react'
import './MessageSender.css'
import {Avatar} from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoIcon from '@material-ui/icons/Photo';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import {connect} from 'react-redux'
import db from './firebase'
import firebase from 'firebase'
function MessageSender(props) {

    const user=props.user

    const [input,setInput]=React.useState('')
    const[imageUrl,setImageUrl]=React.useState('')
    const handleSubmit=(e)=>{
        console.log(e)
        e.preventDefault()
        setInput("")
        setImageUrl('')
        db.collection("posts").add({
            message:input,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            profilePic:user.photoURL,
            image:imageUrl,
        })


    }


    return (
        <div className="message__sender">
            <div className="message__sender__top">
                <Avatar classname="avatar" src={user.photoURL}/>
                <form onSubmit={handleSubmit} >
                    <input className="message__sender__input" value={input} onChange={(e)=>setInput(e.target.value)} placeholder={`Whats on your mind, ${user.displayName}?`} type="text"/>
                    <input className="message__sender__url" value={imageUrl} onChange={(e)=>setImageUrl(e.target.value)} placeholder="Image URL" type="text"/>
                    <button type="submit" onSubmit={handleSubmit}>Hidden</button>
                    </form>
            </div>
         <div className="message__sender__bottom">
             <div className="message__sender__option">
<VideocamIcon style={{color:"red"}}/>
<h3>Live Video</h3>
</div>
<div className="message__sender__option">
<PhotoIcon style={{color:"green"}}/>
<h3>Photo/Video</h3>
</div>
<div className="message__sender__option">
<InsertEmoticonIcon style={{color:'orange'}}/>
<h3>Activities/Feeling</h3>
</div>
             
         </div>
        </div>
    )
}
const mapStateToProps=state=>{
    return{
        user:state.user
    }
}

export default connect(mapStateToProps,null)(MessageSender);
