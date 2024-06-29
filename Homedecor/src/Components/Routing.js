import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Register from "./Loginpages/Register";
import Signin from "./Loginpages/Signin";
import Privateauth from './Privateauth'

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
      <Routes>
          <Route Component={Privateauth}>

          <Route path="/checkout" element={<Checkout></Checkout>} />
          <Route path="/home" Component={Home} />
          <Route path="/" Component={Home} />

          <Route path="/light" element={"Home"} />
          <Route path="/flower" element={"Home"} />
          <Route path="/wedding" element={"Home"} />
          {/* <Route path="/linen" element={"linen"} /> */}
          <Route path="/logout" element={"logodfasdfasd"}/>

          </Route>

          <Route path="/register" Component={Register} />
          <Route path="/signin" Component={Signin} />


        </Routes>
      </BrowserRouter>

      <BrowserRouter>
        {/* <Header></Header> */}
       
        <Routes>
          <Route path="/checkout/things" element={<h2>dfdsf</h2>} />
          <Route path="/products/category1" Component={Home} />
          <Route path="/products/signup" element={<h2>fdsfadf</h2>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
