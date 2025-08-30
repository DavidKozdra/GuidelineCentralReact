
import './App.css'
import { useState, useEffect } from 'react'
import Product from "./components/product"
function App() {



  //product_type, gender and material
  let items = [
    {
      name: "Trex shirt", description: "a fine t shirt red and green stripes", price: 7, moreDetails: "added details including scale of the item and location sourced", product_type: "shirt", gender: "male", material: "silk"
    },

    {
      name: "pink hoodie", description: "pink hoodie", price: 20, moreDetails: "added details including scale of the item and location sourced", product_type: "hoodie", gender: "female", material: "polyester"
    },

    {
      name: "chrismas sweater", description: "sweater with a big green tree", price: 15, moreDetails: "added details including scale of the item and location sourced", product_type: "sweater", gender: "unisex", material: "cotton"
    },
    {
      name: "Blue shirt", description: "Simple blue colared shirt", price: 7, moreDetails: "added details including scale of the item and location sourced", product_type: "shirt", gender: "male", material: "silk"
    },

    {
      name: "Purple hoodie", description: "Nice purple hoodie for a lady", price: 20, moreDetails: "added details including scale of the item and location sourced", product_type: "hoodie", gender: "female", material: "polyester"
    },

    {
      name: "chrismas sweater", description: "a great remote for any TV", price: 15, moreDetails: "added details including scale of the item and location sourced", product_type: "sweater", gender: "unisex", material: "cotton"
    },
    {
      name: "poly shirt", description: "a great remote for any TV", price: 15, moreDetails: "added details including scale of the item and location sourced", product_type: "shirt", gender: "unisex", material: "polyester"
    },

    {
      name: "lady sweater", description: "a great remote for any TV", price: 15, moreDetails: "added details including scale of the item and location sourced", product_type: "sweater", gender: "female", material: "polyester"
    },
  ]

  const [filters, setFilters] = useState({
    product_type: "",
    gender: "",
    material: ""
  })

  const [newItems, setNewItems] = useState(items)


  function handleChange() {
    if (event.target.title == "product_type") {
      setFilters(
        {
          ...filters,
          product_type: event.target.value,
        }
      )
    }

    if (event.target.title == "gender") {
      setFilters(
        {
          ...filters,
          gender: event.target.value,
        }
      )
    }

    if (event.target.title == "material") {
      setFilters(
        {
          ...filters,
          material: event.target.value,
        }
      )
    }
  }


  useEffect(() => {
    console.log(filters, "get filters")
    let _newitems = []

    _newitems = items.filter((item) => {

      return (filters.product_type == item.product_type || filters.product_type == "") && (filters.gender == item.gender || filters.gender == "") && (filters.material == item.material || filters.material == "")
    })
    console.log(_newitems.length)
    setNewItems(_newitems)
  }, [filters])


  return (
    <>
      <div className='main-container'>

        <div className='filter-container'>
          <h1>
            Options
          </h1>


          <h2>
            Product Type
          </h2>
          <select title='product_type' onChange={handleChange} value={filters.product_type} defaultValue={""}>
            <option label='unset'> </option>
            <option>shirt</option>

            <option>hoodie</option>

            <option>sweater</option>
          </select>


          <h2>
            Gender
          </h2>
          <select title='gender' onChange={handleChange} value={filters.gender} defaultValue={""}>
            <option label='unset'> </option>
            <option>male</option>

            <option>female</option>

            <option>unisex</option>
          </select>

          <h2>
            Material
          </h2>
          <select title='material' onChange={handleChange} value={filters.material} defaultValue={""}>  
            <option label='unset'> </option>
            <option>silk</option>

            <option>polyester</option>

            <option>cotton</option>
          </select>
        </div>


        <div className='grid' >
          {
            newItems.map((item, i) => {


              return (

                <Product name={item.name} description={item.description} price={item.price} imageURL="https://placehold.co/400x200" moreDetails={item.moreDetails} key={i}>
                </Product>

              )

            })

          }
        </div>



      </div>
    </>
  )
}

export default App
