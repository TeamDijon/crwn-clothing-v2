import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import './checkout-item.styles.scss';

const CheckoutItem = ({ item }) => {
  const { name, quantity, price, imageUrl } = item;
  const { removeItemFromCart, updateCartItemQuantity } =
    useContext(CartContext);

  const removeProductFromCart = () => removeItemFromCart(item);
  const increaseProductQuantity = () => updateCartItemQuantity(item, 1);
  const reduceProductQuantity = () => updateCartItemQuantity(item, -1);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img className="image" src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={reduceProductQuantity}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="plus" onClick={increaseProductQuantity}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove" onClick={removeProductFromCart}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
