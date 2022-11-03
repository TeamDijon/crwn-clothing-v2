import './cart-item.styles.scss';

const CartItem = ({ item }) => {
  const { name, price, imageUrl, quantity } = item;

  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <h2 className="name">{name}</h2>
        <p>
          {quantity} x ${price}
        </p>
      </div>
    </div>
  );
};

export default CartItem;
