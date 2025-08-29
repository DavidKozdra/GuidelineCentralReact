
import './App.css'
import Product from "./components/product"
function App() {
  let items =[
    {
      name:"shirt", description:"a fine t shirt red and green stripes",price:7, moreDetails:"added details including scale of the item and location sourced"
    }, 

    {
      name:"lawn care kit", description:"fertilizer and even some treatment for color",price:20, moreDetails:"added details including scale of the item and location sourced"
    }, 

    {
      name:"Remote", description:"a great remote for any TV",price:15, moreDetails:"added details including scale of the item and location sourced"
    }, 
      {
      name:"shirt", description:"a fine t shirt red and green stripes",price:7, moreDetails:"added details including scale of the item and location sourced"
    }, 

    {
      name:"lawn care kit", description:"fertilizer and even some treatment for color",price:20, moreDetails:"added details including scale of the item and location sourced"
    }, 

    {
      name:"Remote", description:"a great remote for any TV",price:15, moreDetails:"added details including scale of the item and location sourced"
    }, 
      {
      name:"shirt", description:"a fine t shirt red and green stripes",price:7, moreDetails:"added details including scale of the item and location sourced"
    }, 

    {
      name:"lawn care kit", description:"fertilizer and even some treatment for color",price:20, moreDetails:"added details including scale of the item and location sourced"
    }, 

    {
      name:"Remote", description:"a great remote for any TV",price:15, moreDetails:"added details including scale of the item and location sourced"
    }, 
         {
      name:"shirt", description:"a fine t shirt red and green stripes",price:7, moreDetails:"added details including scale of the item and location sourced"
    }, 

    {
      name:"lawn care kit", description:"fertilizer and even some treatment for color",price:20, moreDetails:"added details including scale of the item and location sourced"
    }, 

    {
      name:"Remote", description:"a great remote for any TV",price:15, moreDetails:"added details including scale of the item and location sourced"
    }, 
      {
      name:"shirt", description:"a fine t shirt red and green stripes",price:7, moreDetails:"added details including scale of the item and location sourced"
    }, 

    {
      name:"lawn care kit", description:"fertilizer and even some treatment for color",price:20, moreDetails:"added details including scale of the item and location sourced"
    }, 

    {
      name:"Remote", description:"a great remote for any TV",price:15, moreDetails:"added details including scale of the item and location sourced"
    }, 
         {
      name:"shirt", description:"a fine t shirt red and green stripes",price:7, moreDetails:"added details including scale of the item and location sourced"
    }, 

    {
      name:"lawn care kit", description:"fertilizer and even some treatment for color",price:20, moreDetails:"added details including scale of the item and location sourced"
    }, 

    {
      name:"Remote", description:"a great remote for any TV",price:15, moreDetails:"added details including scale of the item and location sourced"
    }, 
      {
      name:"shirt", description:"a fine t shirt red and green stripes",price:7, moreDetails:"added details including scale of the item and location sourced"
    }, 

    {
      name:"lawn care kit", description:"fertilizer and even some treatment for color",price:20, moreDetails:"added details including scale of the item and location sourced"
    }, 

    {
      name:"Remote", description:"a great remote for any TV",price:15, moreDetails:"added details including scale of the item and location sourced"
    }, 
         {
      name:"shirt", description:"a fine t shirt red and green stripes",price:7, moreDetails:"added details including scale of the item and location sourced"
    }, 

    {
      name:"lawn care kit", description:"fertilizer and even some treatment for color",price:20, moreDetails:"added details including scale of the item and location sourced"
    }, 

    {
      name:"Remote", description:"a great remote for any TV",price:15, moreDetails:"added details including scale of the item and location sourced"
    }, 
      {
      name:"shirt", description:"a fine t shirt red and green stripes",price:7, moreDetails:"added details including scale of the item and location sourced"
    }, 

    {
      name:"lawn care kit", description:"fertilizer and even some treatment for color",price:20, moreDetails:"added details including scale of the item and location sourced"
    }, 

    {
      name:"Remote", description:"a great remote for any TV",price:15, moreDetails:"added details including scale of the item and location sourced"
    }, 

  ]

  return (
    <>
      <div>
      
                  <div className='grid' >
        {
          items.map((item,i) => {
              

              return (

                    <Product name={item.name} description={item.description}  price={item.price}  imageURL="https://placehold.co/400x200"  moreDetails={item.moreDetails} key={i}>
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
