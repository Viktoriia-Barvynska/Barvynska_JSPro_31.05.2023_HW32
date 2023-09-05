import ProductsBlock from '../productsBlock/ProductsBlock';
import Sidebar from '../sidebar/Sidebar';
import './mainblock.css';



const MainBlock = () => {
  return (
    <div className='wr'>
    <div>
      <Sidebar />
    </div>
        <div>
           <ProductsBlock /> 
        </div>
      </div>
  )
}

export default MainBlock