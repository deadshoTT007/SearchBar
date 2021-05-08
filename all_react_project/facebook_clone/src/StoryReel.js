import React from 'react'
import Story from './Story'
import manish from './image/118086196_2699685770270804_3247997424088888290_n.jpg'
import zhang from './image/Zhang+Jike+ZKPvsGeEqJ-m.jpg'
import ma from './image/447197_154184_800_auto_jpg.jpg'
import './StoryReel.css'

function StoryReel() {
    return (
        <div className="story__reel" >
<Story profileSrc={manish} image={zhang} title="Manish Kharel"/>  
<Story profileSrc={manish} image={ma} title="Manish Kharel"/>  
<Story profileSrc={manish} image={zhang} title="Manish Kharel"/> 
<Story profileSrc={manish} image={ma} title="Manish Kharel"/>  
<Story profileSrc={manish} image={zhang} title="Manish Kharel"/> 
   </div>
    )
}

export default StoryReel
