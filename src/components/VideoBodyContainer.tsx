import FilterButtonsList from './FilterButtonsList'
import VideoContainer from './VideoContainer'

const VideoBodyContainer = () => {
  return (
    <div className='w-auto overflow-x-auto whitespace-nowrap'>
      <FilterButtonsList/>
      <VideoContainer />
    </div>
  )
}

export default VideoBodyContainer
