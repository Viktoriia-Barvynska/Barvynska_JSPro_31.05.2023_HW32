import './cart.css';

const Cart = ({title, price}) => {
  return (
    <div>
         <div className="product-card">
        <h2 className="product-title">{title}</h2>
        <p className="product-description">product description</p>
        <p className="product-price">price: ${price}</p>
        <button className="buy-button">By</button>
    </div>
    </div>
  )
}

export default Cart