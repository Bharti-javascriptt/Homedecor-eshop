import React from 'react'
import './Checkout.css'
import Checkoutproduct from './Checkoutproduct'
import Subtotal from './Subtotal'
import Footer from './Footer'
// import {SportsBasketball} from '@material-ui/icons'
import { useStateValue } from './StateProvider'

const Checkout = () => {
    const  [{basket}, dispatch]=useStateValue()
  return (
    <div class="z">
            <div className='checkout_'>
        <div className="checkout_left">
            <img src="https://cdn.pixabay.com/photo/2021/11/17/17/01/indoor-decoration-6804164_1280.jpg" alt="" className="checkout_add" />
            <div>
                <h2 className="checkout_title">
                    Your Shopping Basket
                </h2>
                {basket.map(item=>(
                    <Checkoutproduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}/>




                ))}
                {/* <Checkoutproduct 
                title={"Brown Wooden Desk With Rolling Chair and Shelves Near Window"}
                price= {58}
                image={'https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                
                
                />
                <Checkoutproduct

                title={"Brown Wooden Vase Near the Window"}
                price={958}
                image={'https://images.pexels.com/photos/1129413/pexels-photo-1129413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                
                
                /> */}

            </div>

        </div>
        <div className="checkout_right">
            <Subtotal></Subtotal>

        </div>


    </div> 
    {/* <Footer/>   */}
    </div>

  )
}

export default Checkout
