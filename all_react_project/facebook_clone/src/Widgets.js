import React from 'react'

function Widgets() {
    return (
   <div className="widgets">
       {/* <iframe src="https://www.youtube.com/results?search_query=ma+long+vs+zhang+jike"
       width="340px"
       height="100%"
       style={{border:"none" ,overFlow:"scroll"}}
       frameBorder="0"
       allowTransparency="true"
       allow="encrypted-media">

       </iframe> */}
       <iframe width="560" style={{overflow:"hidden"}} height="315" src="https://www.youtube.com/embed/KfczdcFLmsg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
       height="900px"></iframe>
   </div>
    )
}

export default Widgets
