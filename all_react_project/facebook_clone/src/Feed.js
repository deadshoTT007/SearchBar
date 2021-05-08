import React from 'react'
import StoryReel from './StoryReel'
import './Feed.css'
import MessageSender from './MessageSender'
import manish from './image/118086196_2699685770270804_3247997424088888290_n.jpg'
import Post from './Post'
import {connect} from 'react-redux'
import db from './firebase'
import Spinner from './Spinner'
function Feed(props) {

const user=props.user

    const[posts,setPosts]=React.useState([]);
    React.useEffect(()=>{
    let data=[]
    db.collection('posts')
    .onSnapshot(snapshot=>{
        console.log(snapshot,"snapo")
    snapshot.docs.map(doc=>{
        console.log(doc.data(),"doc")
        data.push({id:doc.id,data:doc.data()})
    })
    console.log(data,"data")
    setPosts(data)
    })    
    },[])
    console.log(posts,"posts")
    
let datas=<Spinner/>
if(posts){
    datas=(
         posts.map(post=>{
            console.log(post,"post")
            return(
                <Post username={user.displayName} profilePicture={user.photoURL} image={post.data.image}  message={post.data.message}/>
    
            )
         }
         )
    )
        }        
    



    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender/>
            {datas}
            {/* <Spinner/> */}

           
        </div>
    )
    }
const mapStateToProps=state=>{
    return{
        user:state.user
    }
}

export default connect(mapStateToProps,null)(Feed) 
