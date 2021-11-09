import React from 'react';
import { useHistory } from 'react-router-dom';
    
const ProductList = (props) => {
    const history = useHistory();
    return (
        <div>
            {props.product.map( (product, i) => {
                return(
                    <div key= {i}>
                        <button type='button'onClick={() => history.push(`/${product._id}`)}>{product.title}</button>
                    </div>
                )
            })}
        </div>
    )
}
    
export default ProductList;

