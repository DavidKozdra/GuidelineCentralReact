
import './App.css'
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
  ]

  return (
    <>
      <div className='main-container'>

        <div className='filter-container'>
          <h1>
            Options
          </h1>

          <select title='product Type' >
            <option>shirt</option>

            <option>hoodie</option>

            <option>sweater</option>
          </select>


           <select title='Gender' >
            <option>male</option>

            <option>female</option>

            <option>unisex</option>
          </select>


           <select title='material' >
            <option>silk</option>

            <option>polyester</option>

            <option>cotton</option>
          </select>
        </div>


        <div className='grid' >
          {
            items.map((item, i) => {


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
