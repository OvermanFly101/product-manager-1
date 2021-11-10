import axios from 'axios';
import React, {useState, useEffect} from 'react';
import ProductForm from '../components/productform';
import ProductList from '../components/productlist';

const Main = props => {
  const [product, setProduct] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect( () => {
    axios.get('http://localhost:8000/api/product')
      .then(res => {
        setProduct(res.data);
        setLoaded(true);
      })
      .catch(err => console.log(err));
  }, []);

  const removeFromDom = productId => {
    setProduct(product.filter(product => product._id !== productId));
  }
  
  return(
    <div>
      <ProductForm />
      {loaded && <ProductList product={product} removeFromDom={removeFromDom}/>}
    </div>
  )
}

export default Main;