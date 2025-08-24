import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Body from "./components/Body"
import Header from "./components/Header"
import WatchPage from "./components/WatchPage"
import { useAppSelector } from "./utils/types"
import VideoBodyContainer from "./components/VideoBodyContainer"


function App() {
const showDarkMode = useAppSelector(store => store.darkMode.showDarkMode)
const appRouter = createBrowserRouter([{
  path : "/",
  element : <Body/>,
  children : [
    {
      path : "/",
      element : <VideoBodyContainer />
    },
    {
      path : "/watch",
      element : <WatchPage />
    }
  ]
}])
  return (
    <div className={ showDarkMode ? "bg-black" : "bg-white"}>
   
     
     <RouterProvider router={appRouter} />
    
    </div>
  )
}

export default App
