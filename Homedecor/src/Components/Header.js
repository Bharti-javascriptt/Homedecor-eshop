import React  from "react";
import "./Header.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StorefrontIcon from "@mui/icons-material/Storefront";
// import SearchIcon from "@mui/icons-material/Search";
import { Link ,useNavigate } from "react-router-dom";
import { useStateValue } from "./StateProvider";

const Header = () => {
  const [{ basket }] = useStateValue(); // Destructuring basket from state

  // Ensure basket is initialized properly, assuming it's an array
  const basketCount = basket ? basket.length : 0;


  const auth=localStorage.getItem('user');
  const navigate = useNavigate()

  const logout=()=>{
    // console.warn("dfads")
    localStorage.clear();
    navigate('/register')
  }


  return (
    <div className="header">
      <Link to="/home">
        <div className="header_logo">
          {/* <StorefrontIcon className="headerlogo_image" fontSize="large" /> */}
           <img src="https://cdn.vectorstock.com/i/500p/27/46/home-ecology-gold-tree-logo-vector-14982746.jpg" alt="" />
          <h2 className="header_logotitle">ADDRESS HOME</h2>
        </div>
      </Link>

      <div className="header_search">
        <ul>
          <li>
            <Link to="/light">LIGHTING</Link>
          </li>
          <li>
            <Link to="/flower">VASES & FLOWERS</Link>
          </li>
          <li>
            <Link to="/wedding">The Wedding Edit</Link>
          </li>
          <li>
            {/* <Link to="/linen">LINEN</Link> */}
          </li>
        </ul>
      </div>

      <div className="header_nav">
        {auth?    
        <Link to="/register">
          <div className="nav_item">
            <span className="nav_lineone">Hello Guest</span>
            <span className="nav_linetwo">{JSON.parse(auth).name}</span>
          </div>
        </Link> 
        :
        <Link to="/register">
          <div className="nav_item">
            <span className="nav_lineone">Hello Guest</span>
            <span className="nav_linetwo">Register</span>
          </div>
        </Link>}

        <div className="nav_item">

          {auth?
            <Link onClick={logout} to ="/register">
             <div className="nav_item">
             <span className="nav_lineone">Shop &</span>
              <span className="nav_linetwo">Logout</span>
             </div></Link>
          :
         <Link to="/signin">
          <div className="nav_item">
            <span className="nav_lineone">Shop &</span>
            <span className="nav_linetwo">Sign In</span>
          </div>
        </Link>}
        
        </div>

        <Link to="/checkout">
          <div className="nav_item navitembasket">
            <span >Add To Cart</span>
            <ShoppingBasketIcon fontSize="large" className="item_basket" />
            <span className="nav_linetwo nav_basketCount">{basketCount}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
