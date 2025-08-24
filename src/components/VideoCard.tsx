import { Link } from "react-router-dom"
import { useAppSelector, type VideoCardProps } from "../utils/types"

const VideoCard = ({item} : VideoCardProps) => {
  const showDarkMode = useAppSelector(store => store.darkMode.showDarkMode)
  return (
    <div className={`m-1 ${ showDarkMode ? "bg-black text-white " : "bg-gray-50 shadow-2xl text-gray-600"} cursor-pointer rounded-lg w-1/6 `}>
                  <Link to = {"/watch?v=" + item?.id}>
                    <div className="m-2">
                    <img src={item?.snippet?.thumbnails?.maxres?.url} alt="Video Thumbnail" />
                    <h1 className='m-2 whitespace-normal break-words '>{item?.snippet?.title}</h1>
                   </div>
                   </Link>
     </div>
  )
}

export default VideoCard
