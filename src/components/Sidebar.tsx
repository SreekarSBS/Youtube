import { useSelector } from "react-redux";
import { itemsDefault, itemsExplore, itemsYou } from "../utils/constants";
import SidebarList from "./SidebarList";

const Sidebar = () => {
    const showSidebar = useSelector(store => store.sidebar.showSidebar)

    return showSidebar && (
        <div className="p-4 bg-gray-200 w-34 h-screen">
            <ul >
                <SidebarList items = {itemsDefault} />
                <hr />
                <SidebarList items = {itemsYou} />
                <hr />
                <SidebarList items = {itemsExplore} />
            </ul>
        </div>
    )
}

export default Sidebar;