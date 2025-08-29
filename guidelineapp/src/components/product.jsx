import { useState } from "react"
import "./product.css"

function Product({ name, description, price, imageURL }) {

    const [viewMoreToggle, setViewMoreToggle] = useState()

    return (
        <>
            <div className="card">


                <div className="card-top">

                    <p>
                        {name}
                    </p>

                <p>
                    {price}
                </p>
                </div>


                <img src="https://placehold.co/300x100">

                </img>
                <p>
                    {description}
                </p>


                <div className="buttonOptions">

                    <button onClick={() => {
                        setViewMoreToggle(!viewMoreToggle)
                    }}> View Details</button>


                    <button onClick={() => {
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
