import { categories } from '../utils/constants'
import FilterButton from './FilterButton'

const FilterButtonsList = () => {
  return (
    <div className="flex m-4 gap-6   text-black">
      {
        categories.map(item => <FilterButton item = {item} />)
      }
    </div>
  )
}

export default FilterButtonsList
