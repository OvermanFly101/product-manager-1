import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
    
const Detail = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    const { removeFromDom } = props;
    const history = useHistory();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' +id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, [id]);

    const deleteProduct = (productId) => {
      axios.delete('http://localhost:8000/api/product/' +productId)
          .then(res => {
              removeFromDom(productId)
          })
          .catch(err => console.error(err));
          history.push('/');
    }
    
    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            {/*doesn't update for some reason*/}
            <Link to={'/' +product._id+ '/edit'}> Edit </Link>
            <button type='button' onClick={ e => {deleteProduct(product._id)}}>Delete</button>
        </div>
    )
}
    
export default Detail;

