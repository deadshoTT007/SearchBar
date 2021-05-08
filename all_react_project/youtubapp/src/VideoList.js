import React from 'react'
import VideoItem from './VideoItem'
export default function VideoList({videos,onVideoSelect}) {

    const VIDEO=videos.map((video,index)=><VideoItem onVideoSelect={onVideoSelect} key={index} video={video}/>)
    return VIDEO

    
}
