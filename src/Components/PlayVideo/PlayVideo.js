import React, { useEffect, useState } from 'react'
import './PlayVideo.css'
import like from '../../Assets/like.png'
import dislike from '../../Assets/dislike.png'
import share from '../../Assets/share.png'
import save from '../../Assets/save.png'
import jack from '../../Assets/jack.png'
import video1 from '../../Assets/video.mp4'
import user_profile from '../../Assets/user_profile.jpg'
import { API_KEY, valueConvertor } from '../../data'
import moment from 'moment'
import { useParams } from 'react-router-dom'

const PlayVideo = () => {

     const {videoId}=useParams();

    const [apiData,setApiData]=useState(null);
    const [channelData,setChanneldata]=useState(null);
    const [commentData,setCommentData]=useState([]);

    const fetchVideoData = async()=>{
       const videoDetails_url=` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
         await fetch(videoDetails_url).then( res => res.json()).then(data=>setApiData(data.items[0])) ;   
    }
    const fetchOtherData = async()=>{
         const channelData_url=`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
         await fetch(channelData_url).then(res=>res.json()).then(data=>setChanneldata(data.items[0]));

     const comment_url=`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
         await fetch(comment_url).then(res=>res.json()).then(data=>setCommentData(data.items));   

    }
    useEffect(()=>{
        fetchVideoData();
    },[videoId])

    useEffect(()=>{
fetchOtherData();
    },[apiData])

  return (
    <div className='play-video'>
      {/* <video src={video1} controls autoPlay muted/> */ }
      <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       <h3>{apiData?apiData.snippet.title:"Title Here"}</h3>
       <div className='play-video-info'>
            <p>{apiData?valueConvertor(apiData.statistics.viewCount):"16K"} Views &bull; {apiData?moment(apiData.snippet.publishedAt).fromNow():""}</p>
            <div>
                <span><img src={like} alt=""/>{apiData?valueConvertor(apiData.statistics.likeCount):155}</span>
                <span><img src={dislike} alt=""/>2</span>
                <span><img src={share} alt=""/>Share</span>
                <span><img src={save} alt=""/>Save</span>
            </div>
            </div>
            <hr/>
            <div className='publisher'>
                <img src={channelData?channelData.snippet.thumbnails.default.url:""} alt="" />
                <div>
                    <p>{apiData?apiData.snippet.channelTitle:""}</p>
                    <span>{channelData?valueConvertor(channelData.statistics.subscriberCount):"1M"} Subscribers</span>
                </div>
                <button>Subscribed</button>
            </div>
            <div className='vid-description'>
                <p>{apiData?apiData.snippet.description.slice(0,250):"Description Here"}</p>
                <hr/>
                <h4>{apiData?valueConvertor(apiData.statistics.commentCount):105} Comments</h4>
                {commentData.map((item,index)=>{
                    return(
                         
                <div key={index} className='comment'>
                <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt=""/> 
                <div>
                 <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>1 day ago</span></h3>
                 <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                 <div className='comment-action'>
                     <img src={like} alt=""/>
                     <span>{valueConvertor(item.snippet.topLevelComment.snippet.likeCount)}</span>
                     <img src={dislike} alt=""/>
                 </div>
                </div>
             </div>
                    )
                })}

            </div>
        </div> 
    
  )
}

export default PlayVideo
