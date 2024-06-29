import React from 'react'
import './Home'
import Rotatingimage from './Rotatingimage'
import Product from './Product'
import './img.json'

const Home = () => {
  return (
    <div>
        <div className='home'>

            <div className="section1">
                <Rotatingimage/>
                
                </div>

                <div className="section_1">
                    <h1>THE ORGANIC EDIT</h1>
                    <h1>The Wedding Edit</h1>
                    <h1>The Vintage Den </h1>
                    <h1>Luxury Decor</h1>
                    <h2>URBAN DINNER SET</h2>
                   <h1>UZBEK IKAYAT</h1>
                </div>

            <div className="section2">
            <div className="row">

                <div className="upperdiv">
                <h1>Category</h1>

                <h4>Furniture</h4>

                </div>

                <div className="lowerdiv">

          <Product
            id="1"
            title="DINNER TABLE SET "
            image="https://housing.com/news/wp-content/uploads/2023/02/wooden-furniture-design2-1.png"
            price={4556.99}
            rating={4}
          />
             <Product
            id="1"
            title="HEXAD GOLD STAINLESS STEEL & GLASS NEST OF TABLES"
            image="https://addresshome.com/cdn/shop/files/14926-d_700x.jpg?v=1709623770"
            price={5889.855}
            rating={4}
          />
          <Product
            id="2"
            title="TRENTO GOLD & CLEAR GLASS & METAL CONSOLE TABLE
"
            image="https://addresshome.com/cdn/shop/files/14923-d_700x.jpg?v=1709711770"
            price={29222.99}
            rating={5}
          />
          <Product
            id="3"
            title="BOLZANO GOLD & WHITE GLASS & STAINLESS STEEL SIDE TABLE LARGE
"
            image="https://addresshome.com/cdn/shop/collections/63-Side-Tables_2200x.jpg?v=1664287018"
            price={1000.99}
            rating={3}
          />
        </div></div>




        <div className="row">
               <div className="upperdiv">
                {/* <h1>Category</h1> */}

                <h4>Chandeliers & Ceiling Lights
                </h4>

                </div>

                <div className="lowerdiv">
          <Product
            id="4"
            title="SATURN GOLD CRYSTAL & METAL CHANDELIER
"
            image="https://addresshome.com/cdn/shop/products/AH16446-b_700x.jpg?v=1671530925"
            price={5454.99}
            rating={4}
          />
          <Product
            id="5"
            title="UPTON GLASS & METAL ROD CHANDELIER
"
            image="https://addresshome.com/cdn/shop/products/AH16445-a_700x.jpg?v=1668088042"
            price={39.99}
            rating={5}
          />


<Product
            id="5"
            title="LEON SILVER METAL LED CEILING LIGHT

"
            image="https://addresshome.com/cdn/shop/products/7516_700x.jpg?v=1678776599"
            price={9939.99}
            rating={5}
          />



<Product
            id="5"
            title="LE JARDIN MULTICOLOR JAR CANDLE"
            image="https://addresshome.com/cdn/shop/files/AH17943-h-i_700x.jpg?v=1701423186"
            price={1139.99}
            rating={5}
          />
        </div>
        
        </div>

{/*!!!???????????????!!! {??/*???  */}

        <div className="row">


        <div className="upperdiv">
                {/* <h1>Category</h1> */}

                <h4>TableWare</h4>

                </div>

                <div className="lowerdiv">
          <Product
            id="6"
            title="SPRING PORCELAIN DINNER SET FOR 6
"
            image="https://addresshome.com/cdn/shop/files/collection3.jpg?v=1709641113"
            price={49.99}
            rating={4}
          />
          <Product
            id="7"
            title="RED & OFF WHITE BERRY BRANCH FAUX FLOWER
"
            image="https://addresshome.com/cdn/shop/files/Nav_Banner7_370x230@2x.jpg?v=1664542530"
            price={19.99}
            rating={3}
          />
          <Product
            id="8"
            title="ORANGE & OFF WHITE BERRY BRANCH FAUX FLOWER
"
            image="https://addresshome.com/cdn/shop/files/Nav_Banner8_370x230@2x.jpg?v=1664542545"
            price={29.99}
            rating={5}
          />
               <Product
            id="8"
            title="AZELLIA PINK & WHITE DINNER SET FOR 6

"
            image="https://addresshome.com/cdn/shop/files/AH17436-e_700x.jpg?v=1702452277
"
            price={29.99}
            rating={5}
          />

        </div>
    </div>
 </div>


<div className="section33">
<div class="movediv"></div>

 <div className="section3">
    <div className="left">
    
        <a href="/">Table Clock</a>

    </div>
    <div className="center">
        <a href="/">E-Gift Card</a>


    </div>
    <div className="right">
    
    <a href="/">Serving Trays</a>

    </div>
 </div></div>



 <div className="section4">
   {/* <p>When it comes to decorating our homes, we often want to create a space that not only looks beautiful but also stands the test of time. </p> */}
  
    <div className="col1">
        <img src="https://addresshome.com/cdn/shop/files/collection1_190ddc1d-5c07-4b62-a912-08be8481d915.jpg?v=1709641113" alt="" />
        <h1>NUR</h1>
    </div>

    
    <div className="col2">
        <img src="https://addresshome.com/cdn/shop/files/Banner29_400x.jpg?v=1670399291" alt="" />
        <h1>ART OF GIFTING
        </h1>
    </div>


    <div className="col3">
    
        <img src="https://cdn.shopify.com/s/files/1/0648/6661/5512/files/AH16471-b_34cc12e5-ac3d-4d53-9f13-4341d24222f2_480x480.jpg?v=1705740619" alt="" />
        <h1>TIMELESS HOME DECOR 
        </h1>
    </div>


        
    
 </div>





































 </div>












 </div>
      
  )
}

export default Home
