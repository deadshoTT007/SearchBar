import React from 'react';
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import VideoItem from './VideoItem'


import './App.css';

import * as m from '@material-ui/core' 
import youtube from './Youtube'

class App extends React.Component{

state={
  videos:[],
  selectedVideo:null
}

onVideoSelect=(video)=>{
  this.setState({selectedVideo:video})
}

onFormSubmit=async(search)=>{
const response=await youtube.get('search',{
  params:{
    part:"snippet",
    maxResult:5,
    key:"AIzaSyALYkvlrMFVaF002QH6LGpP0WIfTZf4BFE",
    q:search
  }
})
 await this.setState({videos:response.data.items,selectedVideo:response.data.items[0]})
console.log(response,"adasd")
return;
}

  render() {
    const {selectedVideo}=this.state;
    // const {videos}=this.state;
    console.log(this.state)

    return (
      <>
      <m.Grid  container justify="center" spacing={10}>
        <m.Grid style={{margin:"10px"}} item xs={11}>
          <m.Grid container spacing={10}>
            <m.Grid  item xs={12}>
              <SearchBar onFormSubmit={this.onFormSubmit}/> 
            </m.Grid>
            <m.Grid container xs={12}  style={{width:"100vw",height:"90vh"}} xs={8}>
             <VideoDetail selectedVideo={selectedVideo} />
            </m.Grid>
            <m.Grid xs={4}>
              <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
            </m.Grid> 
          </m.Grid>
        </m.Grid>
      </m.Grid>
      </>
    );
  }
}
export default App;