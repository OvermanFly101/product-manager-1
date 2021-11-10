import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
    
const ProductList = (props) => {
    const history = useHistory();
    const { removeFromDom } = props;

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' +productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            {props.product.map( (product, i) => {
                return(
                    <div key= {i}>
                        <button type='button'onClick={() => history.push(`/${product._id}`)}>{product.title}</button>
                        <button type='button' onClick={ e => {deleteProduct(product._id)}}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}
    
export default ProductList;

