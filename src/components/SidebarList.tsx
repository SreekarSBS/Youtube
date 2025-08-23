import type { StringArray } from "../utils/types"


const SidebarList = ({items} : StringArray) => {
    return (
        <div className="py-4 cursor-pointer">
            {
                items.map((item,id) => <li key={id}>{item}</li>)
            }
        </div>
    )
}

export default SidebarList