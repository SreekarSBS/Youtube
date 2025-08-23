import { useEffect, useState } from 'react'
import { YT_API_DATA } from '../utils/constants'
import type { VideoItem } from '../utils/types'
import VideoCard from './VideoCard'



const VideoContainer = () => {
    const [popularVideos,setPopularVideos] = useState<VideoItem[]>()
    useEffect(() => {
        fetchYoutubePopularVideos()
    },[])

    const fetchYoutubePopularVideos = async() => {
        try {
        const res = await fetch(YT_API_DATA);
        const jsonRes = await res.json()
        console.log(jsonRes);
        setPopularVideos(jsonRes?.items)
        
        } catch(err){
            console.log(err);
        }
    }

  return (
    <div className='flex justify-around flex-wrap'>
      {
        popularVideos?.map((item) => {
            return (
                <VideoCard item = {item} />
            )
        })
      }
    </div>
  )
}

export default VideoContainer

