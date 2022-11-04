import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import './checkout-item.styles.scss';

const CheckoutItem = ({ item }) => {
  const { name, quantity, price, imageUrl } = item;
  const { removeItemFromCart, updateCartItemQuantity } =
    useContext(CartContext);

  const removeProductFromCart = () => removeItemFromCart(item);
  const increaseProductQuantity = () => updateCartItemQuantity(item, 1);
  const reduceCartItemQuantity = () => updateCartItemQuantity(item, -1);

  return (
    <div className="checkout-item">
      <img className="image" src={imageUrl} alt={name} />
      <span className="name">{name}</span>
      <div className="quantity-selector">
        <span className="minus" onClick={reduceCartItemQuantity}>
          &lt;
        </span>
        <span className="quantity">{quantity}</span>
        <span className="plus" onClick={increaseProductQuantity}>
          &gt;
        </span>
      </div>
      <span className="price">{price}</span>
      <span className="remove" onClick={removeProductFromCart}>
        X
      </span>
    </div>
  );
};

export default CheckoutItem;
