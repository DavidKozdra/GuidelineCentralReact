
import './App.css'
import Product from "./components/product"
function App() {
  let items = [1,2,3]

  return (
    <>
      <div>
      
                  <Product name="item Name" description="this is an item" price="$1.0" imageURL="https://placeholder.com/100x100">
                  </Product>
        {
          items.map((items) => {
              
                  <Product name="item Name" description="this is an item" price="$1.0" imageURL="https://placeholder.com/100x100">
                  </Product>

          })
        }


      </div>
    </>
  )
}

export default App
