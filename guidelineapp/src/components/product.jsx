import { useState } from "react"
function Product({name, description, price, imageURL}) {

  const [viewMoreToggle, setViewMoreToggle] = useState()

  return (
    <>
      <div>
        <p>
           {name} 
        </p>
          <p>
           {description} 
        </p>
      
                <p>
           {price} 
        </p>
          <img src="https://placehold.co/100x100">
           {} 
        </img>

        <div className="buttonOptions">

        <button onClick={()=> {
           setViewMoreToggle(!viewMoreToggle)
        }}> View Details</button>


        <button onClick={()=> {
            console.log("add to cart")
        }}> Add To Cart</button>

        </div>


        {viewMoreToggle && (
            <div> 

                View More !
            </div>

        )}
      </div>
    </>
  )
}

export default Product
