
import { itemsDefault, itemsExplore, itemsYou } from "../utils/constants";
import SidebarList from "./SidebarList";
import { useAppSelector } from "../utils/types";

const Sidebar = () => {
    const showSidebar = useAppSelector(store => store.sidebar.showSidebar)

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