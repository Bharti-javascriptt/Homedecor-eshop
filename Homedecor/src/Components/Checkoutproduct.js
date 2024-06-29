import React from 'react';
import './Checkoutproduct.css';
import { useStateValue } from './StateProvider';

function Checkoutproduct({ id, rating, title, image, price }) {
  const [{ basket }, dispatch] = useStateValue();

  const removefrombasket = () => {
    dispatch({
      type: 'remove_from_basket',
      id: id,
    });
  };

  return (
    <div className='checkout_product'>
      <img src={image} className='checkoutproduct_image' alt='' />

      <div className='checkoutproduct_info'>
        <p className='checkoutproduct_title'>{title}</p>
        <p className='checkoutproduct_price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='checkoutproduct_rating'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span key={i}>❤️</span>
            ))}
        </div>
        <button className='xyz' onClick={removefrombasket}>
          Remove From Basket
        </button>
      </div>
    </div>
  );
}

export default Checkoutproduct;
