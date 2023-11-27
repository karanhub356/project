// Import necessary React components and modules
import React, { useState } from 'react';
import './Shop.css'
import Slider from './Slider';
import Footer from'./Footer';
import { Home } from '@mui/icons-material';

// Sample data for medical products
const medicalProducts = [
  { id: 1,image:'https://www.netmeds.com/images/product-v1/150x150/112125/vicks_vaporub_5_ml_0.jpg', name: 'vicks', price: 10.99 },
        { id: 2,image:'https://www.netmeds.com/images/product-v1/150x150/388215/volini_spray_100gm_46243_0_2.jpg',name: 'Volini gel 75gm', price: 5.99 },
        { id: 3,image:'https://www.netmeds.com/images/product-v1/150x150/113653/revital_h_capsule_60s_37254_0_1.jpg', name: 'Revital H capsule 30', price: 15.99 },
        { id: 4,image:'https://www.netmeds.com/images/product-v1/150x150/902372/ensure_diabetes_care_powder_vanilla_flavour_1_kg_refill_pack_120027_0_2.jpg', name: 'Ensure Diabetes care powder', price: 15.99 },
        { id: 5,image:'https://www.netmeds.com/images/product-v1/150x150/958654/ensure_peptide_powder_vanilla_flavour_400_gm_pet_jar_206234_0_1.jpg', name: 'Ensure Isolate', price: 15.99 },
        { id: 6,image:'https://www.netmeds.com/images/product-v1/150x150/915833/triclenz_hair_cleanser_250_ml_0_1.jpg',name: 'Triclenz Hair Cleanser 250', price: 5.99 },
        { id: 7,image:'https://www.netmeds.com/images/product-v1/150x150/354458/accu_chek_active_test_strip_100_s_0.jpg', name: 'ACCU Check Active Strip', price: 15.99 },
        { id: 8,image:'https://www.netmeds.com/images/product-v1/150x150/959465/bold_care_spark_immunity_booster_tablet_60s_207336_0_1.jpg', name: 'Bold Spark Immunity Booster', price: 15.99 },
        { id: 9,image:'https://www.netmeds.com/images/product-v1/150x150/977197/netmeds_3_ply_face_mask_with_nose_pin_50s_0_1.jpg', name: 'Ply Face Mask', price: 15.99 },
        { id: 10,image:'https://www.netmeds.com/images/product-v1/150x150/411251/nivea_men_roll_on_deodorant_fresh_active_25_ml_52990_0_5.jpg', name: 'Nivea Men Deoderant', price: 15.99 },
        { id: 11,image:'https://www.netmeds.com/images/product-v1/150x150/341494/liv_52_tablet_100_s_0.jpg', name: 'Himalaya Liv 50', price: 15.99 },
        { id: 12,image:'https://www.netmeds.com/images/product-v1/150x150/102099/dettol_antiseptic_liquid_1_ltr_0_2.jpg', name: 'Dettol Antiseptic Liquid', price: 15.99 },
  // Add more products as needed
];

// Component for displaying individual product details
const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

// Component for the Shop Now page
const ShopNow = () => {
  // State to manage the selected products in the cart
  const [cart, setCart] = useState([]);

  // Function to handle adding a product to the cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };
 
  


  return (
  <div>
    <div className="shop-now">
        <h2>Shop Now</h2>
        
    </div>
    <Slider/>
      
      <div className="list" >
        {medicalProducts.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <Footer/>
  </div>
  );
};

export default ShopNow;
