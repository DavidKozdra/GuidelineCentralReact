import { useState } from "react"
import "./product.css"

function Product({ name, description, price, imageURL, moreDetails }) {

    const [viewMoreToggle, setViewMoreToggle] = useState()

    return (
        <>
            <div className="card">


                <div className="card-top">

                    <p>
                        {name}
                    </p>

                <p>
                   $ {price}
                </p>
                </div>


                <img src={imageURL}>

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
                    <div className="details">
                        <p>
                            {moreDetails}
                        </p>
                    </div>

                )}
            </div>
        </>
    )
}

export default Product
