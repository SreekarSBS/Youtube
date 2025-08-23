import { useDispatch } from "react-redux"
import { MENU_ICON_URL, YT_LOGO_URL } from "../utils/constants"
import { toggleSidebar } from "../utils/sidebarSlice"


const Header = () => {
  const dispatch = useDispatch()

  const handleSidebarToggle = () => {
    dispatch(toggleSidebar())
  }
  
  return (
    <div className="border p-4 grid grid-flow-col">
            <div className="hamburgerMenu col-span-1 gap-2 flex cursor-pointer h-8 sm:h-10">
        <img onClick={handleSidebarToggle} src={MENU_ICON_URL} alt="menu-icon" />
        <img src={YT_LOGO_URL} alt="YT_LOGO" />
            </div>
            <div className="searchBar flex mx-auto w-1/2 col-span-8 ">
                <input className="w-4/5 border p-2 rounded-l-full " type="text" placeholder="Search" />
                <button className="border p-2 cursor-pointer  rounded-r-full ">
                    <img className="w-7  " src="https://endlessicons.com/wp-content/uploads/2015/08/search-icon-2-614x460.png" alt="Search-icon" />
                </button>
            </div>
            <div className="profile relative flex justify-end col-span-1">
               <img className=" cursor-pointer absolute hover:size-11 w-8 xl:w-10" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="user-icon" />
            </div>
    </div>
  )
}

export default Header
