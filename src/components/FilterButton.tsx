import { useAppSelector, type String } from "../utils/types"


const FilterButton = ({item} : String) => {
  const showDarkMode = useAppSelector(store => store.darkMode?.showDarkMode)
 
  return (
    <button className={`border cursor-pointer  px-2 p-1 ${ showDarkMode ? "bg-gray-400/30 text-white hover:bg-gray-800 " : "bg-gray-300  hover:bg-gray-100 text-gray-800"}  text-sm  text-center  rounded-lg h-8 `}>
      {item}
    </button>
  )
}

export default FilterButton
