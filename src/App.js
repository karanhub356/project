import Home from './components/Home';
import Footer from './components/Footer';
import Login from './components/Login';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Signin from './components/Login';
import Register from './components/Register';
import ProductList from './components/product';
import Shop from './components/Shop';
import SearchBar from './components/SearchBar';
import About from './components/About';
function App() {
  return (
    <div>     
      
      <Router>
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/product" element={<ProductList/>} />
                <Route path="/shop" element={<Shop/>} />
                <Route path="/About" element={<About />} />

            </Routes>
       </Router>
      </div> 
  );
}

export default App;