import React from 'react'
// import * as m from '@material-ui/core'
import * as m from '@material-ui/core';
const VideoDetail=({selectedVideo})=>{
  
    console.log(selectedVideo)
    if(!selectedVideo){
        return <div>Loading....</div>
    }
    const viodeoSrc=`https://www.youtube.com/embed/${selectedVideo.id.videoId}`
  

return(
    <>
    <m.Paper elevation={6} style={{height:"90%"}} style={{width:"100%"}}>
        <iframe frameBorder="0" height="100%" title="Video Player" width="100%" src={viodeoSrc}/>
    </m.Paper>
    <m.Paper style={{margin:"20px",padding:"20px"}} elevation={6} >
        <m.Typography variant="h4" >{selectedVideo.snippet.title}-{selectedVideo.snippet.channelTitle}</m.Typography>
        <m.Typography variant="subtitle1">{selectedVideo.snippet.channelName}</m.Typography>
        <m.Typography variant="subtitle2">{selectedVideo.snippet.description}</m.Typography>
    </m.Paper>
    </>
    
) ;
}
export default VideoDetail
