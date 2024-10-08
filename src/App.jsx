import React, { useState } from 'react'
import Navigation from './Navigation/Nav'
import Products from './Products/Products'
import Recommended from './Recommended/Recommended'
import Sidebar from './SideBar/Sidebar'
import Data from './DB/Data'
import Category from './SideBar/Category/Category'
import Cart from './Components/Cart'


function App() {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [query, setQuery] = useState("")

  //-------------- input Filter
  const handleInputChange = (e) => {
    setQuery(e.target.value)
  }

  const filterItem = Data.filter((Data) => Data.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1)


  //-------------- Radio Filter

  const handleChange = (e) => {
    setSelectedCategory(e.target.value)
  }


  //-------------- Buttons Filter
  const handleClick = (e) => {
    setSelectedCategory(e.target.value)
  }


  function filterData(Data, selected, query) {
    let filterProducts = Data;

    // Filtering by input (query)
    if (query) {
      filterProducts = Data.filter(item =>
        item.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
      );
    }

    // Filtering by selected category, color, company, price, or title
    if (selected) {
      filterProducts = filterProducts.filter(({ category, color, company, newPrice, title }) =>
        category === selected || color === selected || company === selected || newPrice === selected || title === selected
      );
    }

    // Map over filtered products and return Cart components
    return filterProducts.map(({ img, title, star, reviews, prevPrice, newPrice }, index) => (
      <Cart
        key={index}  // It's better to use a unique identifier if available
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        newPrice={newPrice}
        prevPrice={prevPrice}
      />
    ));
  }

  const result = filterData(Data, selectedCategory, query)

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleChange={handleChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  )
}

export default App
