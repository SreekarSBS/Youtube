import { useAppSelector, type VideoCardProps } from "../utils/types"

const VideoCard = ({item} : VideoCardProps) => {
  const showDarkMode = useAppSelector(store => store.darkMode.showDarkMode)
  return (
    <div className={`border ${ showDarkMode ? "bg-black text-white " : "bg-gray-50 shadow-2xl text-gray-600"} cursor-pointer rounded-lg w-1/5 m-3 `}>
                    <div className="m-2">
                    <img src={item?.snippet?.thumbnails?.maxres?.url} alt="Video Thumbnail" />
                    <h1 className='m-2 whitespace-normal break-words '>{item?.snippet?.title}</h1>
                   </div>
     </div>
  )
}

export default VideoCard
