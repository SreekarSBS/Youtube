import { Link } from "react-router-dom"
import { useAppSelector, type VideoCardProps } from "../utils/types"

const VideoCard = ({item} : VideoCardProps) => {
  const showDarkMode = useAppSelector(store => store.darkMode.showDarkMode)
  console.log(item);
  
  return (
    <div className={`m-1 ${ showDarkMode ? "bg-black text-white " : "bg-gray-50 shadow-2xl text-gray-600"} cursor-pointer border rounded-lg max-w-3xs `}>
                  <Link to = {"/watch?v=" + item?.id}>
                    <div className="m-2">
                    <img src={item?.snippet?.thumbnails?.maxres?.url || item?.snippet?.thumbnails?.medium?.url  } alt="Video Thumbnail" />
                    <h1 className='m-2 whitespace-normal break-words '>{item?.snippet?.title}</h1>
                   </div>
                   </Link>
     </div>
  )
}

export const AdVideoCard = ({item} : VideoCardProps) => {
    return (
       <div className="p-1 m-1 border border-red-400 inline-flex">
        <VideoCard item = {item} />
         </div>
      
    )
}

export default VideoCard
