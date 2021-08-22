import React from 'react'

import products from './data/products'

export default props => {

    //percorre os produtos, transformando em lista
    function getProductsList(){
        return products.map(product => {
            return <li key={product.id}
            >{product.id} - {product.name} = R${product.value}
            </li>
        });
    }

    return (
        <div>
            <h2>
                <ul>
                    {getProductsList()}
                </ul>
            </h2>
        </div>
    )
}