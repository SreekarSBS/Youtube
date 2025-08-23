export interface Array {
    items: [string];
}

const SidebarList = ({items} : Array) => {
    return (
        <div className="py-4 cursor-pointer">
            {
                items.map((item,id) => <li key={id}>{item}</li>)
            }
        </div>
    )
}

export default SidebarList