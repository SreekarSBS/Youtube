import type { StringArray } from "../utils/types"


const SidebarList = ({items} : StringArray) => {
    return (
        <div className="py-4 text-md  cursor-pointer">
            {
                items.map((item,id) => <li className="hover:underline " key={id}>{item}</li>)
            }
        </div>
    )
}

export default SidebarList