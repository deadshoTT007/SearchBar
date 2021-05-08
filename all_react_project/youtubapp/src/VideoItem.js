import React from 'react'
import * as m from "@material-ui/core"

export default function VideoItem({video,onVideoSelect}) {
    console.log(video,"video")
    return (
        <m.Grid item xs={12}>
            <m.Paper style={{display:"flex",alignItems:"center"}}>
                <img style={{marginLeft:"20px",marginBottom:"20px",marginRight:"10px",borderRadius:"6px",cursor:"pointer"}} src={video.snippet.thumbnails.medium.url} onClick={()=>onVideoSelect(video)} alt="image"/>
                <m.Typography >{video.snippet.title}</m.Typography>
            </m.Paper>
        </m.Grid>
    )
}
