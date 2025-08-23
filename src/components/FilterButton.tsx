import type { String } from "../utils/types"


const FilterButton = ({item} : String) => {
  return (
    <button className="border cursor-pointer hover:bg-gray-100 px-2 p-1 bg-gray-50 text-sm text-center  rounded-lg h-8 ">
      {item}
    </button>
  )
}

export default FilterButton
