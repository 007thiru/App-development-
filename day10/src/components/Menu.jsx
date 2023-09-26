import React from 'react'
import { Link } from 'react-router-dom'
//import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // You can import icons for your social media handles


const products = [
    {
      name: 'Roasted Chicken with lemon slices ',
      price: 'RS.360',
      features: '4.5 *',
      imageSrc: 'https://i.pinimg.com/originals/ed/74/45/ed7445004d820ef69ba16206f3570b6f.jpg',

    },
    {
      name: 'Sea Food',
      price: 'Rs.200',
      features: '4.3',
      imageSrc: 'https://media.istockphoto.com/id/1214416414/photo/barbecued-salmon-fried-potatoes-and-vegetables-on-wooden-background.jpg?s=612x612&w=0&k=20&c=Y8RYbZFcvec-FXMMuoU-qkprC3TUFNiw3Ysoe8Drn6g=',
    },
    {
      name: 'Porota Chicken Curry',
      price: 'Rs.120',
      features: '4.2',
      imageSrc: 'https://www.theflavorbender.com/wp-content/uploads/2021/03/Beef-Curry-8916-scaled.jpg',
    },
    {
      name: 'Chicken Biryani',
      price: 'Rs150',
      features: '4.8',
      imageSrc: 'https://wallpapers.com/images/hd/chicken-biryani-in-an-iron-dish-1moa8uptmc2y8b5i.jpg',
    },{
      name: 'Chicken tikka masala',
      price: 'Rs.175',
      features: '4.6',
      imageSrc: 'https://wallpapers.com/images/hd/chicken-tikka-masala-with-flat-bread-indian-food-8e9yxkpwh5klk339.jpg',
    },{
      name: 'One-pot Creamy Chicken and Rice',
      price: 'Rs.160',
      features: '4.4',
      imageSrc: 'https://images-gmi-pmc.edge-generalmills.com/75a7343a-1520-4e95-a13f-e61b5fc5b741.jpg',
    },
]

const menu = () => {
  return (


    <div>
      
      
       <nav className="navbar">
          <ul>
            <Link to="/dash">
            
            <div className='navigation'>Home </div>
            </Link>
          </ul>
        </nav>   
        
  
    


    <div className="transparent-container">
    <div className="container">
      <h1 className="title">Special Dish</h1>
      <div className="product-list">
        {products.map((product, index) => (
          <div className="product" key={index}>
            <img src={product.imageSrc} alt={product.name} />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-price">{product.price}</p>
            <p className="product-features">{product.features}</p>

            <button class="cart-button">
  <span class="add-to-cart">Add to cart</span>
  <span class="added">Added</span>
  <i class="fas fa-shopping-cart"></i>
  <i class="fas fa-box"></i>
</button>
            
        
              
          </div>
          
        ))}
      </div>
    </div>
  </div> 
  </div> 
  
  
  
  
  )
}
  
  
    


  




 

export default menu;