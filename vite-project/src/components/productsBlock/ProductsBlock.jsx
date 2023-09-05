import Cart from '../cart/Cart';
import './productsBlock.css'

const ProductsBlock = () => {
  return (
    <div className='center'>
    <Cart title="products 1" price={30.99}/>
    <Cart title="products 2" price={19.99}/>
    <Cart title="products 3" price={10.99}/>
    <Cart title="products 4" price={25.99}/>
    <Cart title="products 5" price={10.99}/>
    <Cart title="products 6" price={15.99}/>
    <Cart title="products 7" price={40.99}/>
    <Cart title="products 8" price={35.99}/>
    <Cart title="products 9" price={18.99}/>
    <Cart title="products 10" price={11.99}/>
    </div>
  )
}

export default ProductsBlock