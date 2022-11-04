import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import CheckoutItem from '../checkout-item/checkout-item.component';

import './checkout-form.styles.scss';

const CheckoutForm = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-form-container">
      <div className="checkout-intro">
        <span>Product</span>
        <span>Description</span>
        <span>Quantity</span>
        <span>Price</span>
        <span>Remove</span>
      </div>
      <div className="checkout-items">
        {cartItems.map((item) => (
          <CheckoutItem key={item.id} item={item} />
        ))}
      </div>
      <span>{cartTotal}</span>
    </div>
  );
};

export default CheckoutForm;
