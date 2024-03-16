import { useContext, useId } from 'react'
import '../css/Filters.css'
import { FiltersContext } from '../context/filters'
export const Filters = () => {
  const { filters, setFilters } = useContext(FiltersContext)
  const priceId = useId()
  const categoryId = useId()

  const handleChangeMinPrice = (event) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor='price'>Price</label>
        <input
          type='range'
          id={priceId}
          min={0}
          max={3000}
          value={filters.minPrice}
          onChange={handleChangeMinPrice}
        />
        <span>${filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor='category'>Category</label>
        <select className='form-control' name='category' id={categoryId} value={filters.category} onChange={handleChangeCategory}>
          <option value='all'> All</option>
          <option value='laptops'>Laptops</option>
          <option value='smartphones'>Smartphones</option>
        </select>
      </div>
    </section>
  )
}
