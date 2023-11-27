import React, { useState } from "react"
import './Home.css'
import Footer from "./Footer";
import { Search } from "@mui/icons-material";
import img from './img.jpg';
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import About from "./About";


const Home = () => {
    const [menu,setMenu] = useState("home");
    const medicalProducts = [
        { id: 1,image:'https://www.netmeds.com/images/product-v1/150x150/112125/vicks_vaporub_5_ml_0.jpg', name: 'vicks', price: 10.99 },
        { id: 2,image:'https://www.netmeds.com/images/product-v1/150x150/388215/volini_spray_100gm_46243_0_2.jpg',name: 'Volini gel 75gm', price: 5.99 },
        { id: 3,image:'https://www.netmeds.com/images/product-v1/150x150/113653/revital_h_capsule_60s_37254_0_1.jpg', name: 'Revital H capsule 30', price: 15.99 },
        { id: 4,image:'https://www.netmeds.com/images/product-v1/150x150/902372/ensure_diabetes_care_powder_vanilla_flavour_1_kg_refill_pack_120027_0_2.jpg', name: 'Ensure Diabetes care powder', price: 15.99 },
        { id: 5,image:'https://www.netmeds.com/images/product-v1/150x150/958654/ensure_peptide_powder_vanilla_flavour_400_gm_pet_jar_206234_0_1.jpg', name: 'Ensure Isolate', price: 15.99 },
        // Add more products as needed
      ];
      
      // Component for displaying individual product details
      const ProductCard = ({ product }) => {
        const discountedPrice = (product.price * 0.8).toFixed(2);
        return (
          <div className="product-card" style={{ margin: '50px', backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <img src={product.image} alt="" style={{ width: '150px', height: '150px', objectFit: 'contain', borderRadius: '8px' }} />
      <div style={{ marginTop: '10px' }}>{product.name}</div>
      <p>
        <span style={{ textDecoration: 'line-through', marginRight: '5px' }}>${product.price.toFixed(2)}</span>
        <span style={{ color: 'green' }}>${discountedPrice} (20% off)</span>
      </p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
    
        );
      };
      
      // Component for the Shop Now page
      
        // State to manage the selected products in the cart
        const [cart, setCart] = useState([]);
      
        // Function to handle adding a product to the cart
        const addToCart = (product) => {
          setCart([...cart, product]);
        };
  return (
    <div >

            <div className="navbutton">
                <Link to="/login"><button>Login</button></Link>
                <Link to="/register"><button>Register</button></Link>
            </div>
        <div className="logo">
                <img style={{height:'90px',width:'220px'}} src="https://nms-assets.s3-ap-south-1.amazonaws.com/images/cms/aw_rbslider/slides/1698777726_WebLogo-netmeds-new-logo.svg" alt=""/>
                <h1 className="topic" style={{textAlign:''}}>    </h1>
                
        </div>   
        <div className="search">
        <SearchBar />
        </div>

         <div className="navbar">
            <ul className="menu">
                <li onClick={()=>{setMenu("home")}}><b>Home{menu==='home'?<hr/>:<></>}</b></li>
                <li onClick={()=>{setMenu("shop")}}><b><Link to='/shop'>Product</Link>{menu==='shop'?<hr/>:<></>}</b></li>
                <Link to='/About'><li onClick={()=>{setMenu("about")}}><b>About{menu==='about'?<hr/>:<></>}</b></li></Link>
            </ul>
        </div>
            
        <div>
            <div >
            <img className="hari" src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1690976982_Web_Home_Bannerddd.jpg"alt=""/>
            </div>
        </div>
        <br/> 
        <h3 className="sub" style={{textAlign:'left'}}> Trending Today </h3>
       <div className="linkimage">
            <a href="#"><img src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1700662079_Dabur_web_-_Copyddd.jpg"alt=""/></a>
            <a href="#"><img src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1700662156_Emami_Mini_banner_webdddd.jpg"alt=""/></a>
            <a href="#"><img src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1700662266_Muscleblaze_mini_web.jpg"alt=""/></a>
            

       </div>
       <br/>
       
  

       <div className="sub3">
       <h1 > Limited deals </h1>
       </div>
    <div className="shop-outer">
      <div className="shop-now">
        <div className="product-list" style={{margin:'30px'}}>
          {medicalProducts.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))} 
        </div>
      </div>
    </div>
       <br/>
        <Footer /> 
    </div>
      
   
  )
}

export default Home;