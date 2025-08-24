import { useSelector } from "react-redux"
import { MENU_ICON_URL, YT_LOGO_URL } from "../utils/constants"
import { toggleSidebar } from "../utils/sidebarSlice"
import { useAppDispatch, useAppSelector } from "../utils/types"
import{Squash as Hamburger, Squash} from "hamburger-react"
import { Toggle } from "./ui/toggle"
import { toggledarkMode } from "@/utils/darkModeSlice"
import { Link } from "react-router-dom"


const Header = () => {
  const dispatch = useAppDispatch()
  const showDarkMode = useAppSelector(store => store.darkMode?.showDarkMode)
  const showSidebar = useAppSelector(store => store.sidebar?.showSidebar)
  const handleSidebarToggle = () => {
    dispatch(toggleSidebar())
  }
  const handleDarkModeToggle = () => {
    dispatch(toggledarkMode())
  }
  const headerLogo = showDarkMode ? "https://variety.com/wp-content/uploads/2020/06/youtube-logo.png?w=999&h=562&crop=1" :
  YT_LOGO_URL
  return (
    <div className=" p-4 grid grid-flow-col">
            <div className="hamburgerMenu col-span-1 gap-2 flex cursor-pointer h-8 sm:h-10">
            <Hamburger size={20} color={`${showDarkMode ? "white" : "black" }`} toggled={showSidebar} toggle={handleSidebarToggle} />
            <Link to = "/">
        <img className={`${showDarkMode ? "h-16 -mt-2" : "h-8 mt-auto" } `} src={headerLogo} alt="YT_LOGO" />
        </Link>
           </div>
            <div className="searchBar  flex mx-auto w-1/2 col-span-8 ">
                <input className={ `w-4/5 border p-2 ${showDarkMode ? "border-gray-700 text-gray-200" : "border-gray-300 text-gray-900" }    rounded-l-full `} type="text" placeholder="Search" />
                <button className={`border  ${showDarkMode ? "border-gray-700  bg-white/60" : "border-gray-300  bg-white" }   p-2 cursor-pointer  rounded-r-full `}>
                    <img className="w-7  " src="https://endlessicons.com/wp-content/uploads/2015/08/search-icon-2-614x460.png" alt="Search-icon" />
                </button>
            </div>
            <div className="profile relative flex text-white  items-center justify-evenly col-span-1">
              <Toggle onClick={() => handleDarkModeToggle()} > <p className={ showDarkMode? "text-white" :`text-black`}>{ showDarkMode? "Light Mode" : "Dark Mode"}</p></Toggle>
               <img className=" cursor-pointer  hover:size-11 w-8 rounded-full xl:w-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgB730p0ChSl_CNr5N6n05AGzEtEAhFypOFg&s " alt="user-icon" />
            </div>
    </div>
  )
}

export default Header

