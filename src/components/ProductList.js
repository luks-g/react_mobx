import React from 'react';
import Product from './Product.js';
import ProductFunktyjny from './ProductFunktyjny.js';
class ProductList extends React.Component{

    state={
    products:[
        {id: 0, name:'Apple', porm: false},
        {id: 1, name:'Coofie', porm: true},
        {id: 2, name:'teee', porm: false},
        {id: 3, name:'griii', porm: true},
        {id: 4, name:'strreee', porm: false},
    ]}

    handleBuyClick = id => {
        this.setState( prevStat => {
            const products = prevStat.products.map(p => p.id===id
            ?
            {
               ...p, isSold:true
            }
            : p
            )
            console.log(products);
            return {products}
        });
    }

    render(){
        return(
            <ul>
                {
                    this.state.products.map(p =>(
                       <li key={p.id}>
                           
                               
                               <Product name = {p.name} promo= {p.porm} id = {p.id} 
                               onBuyClick = {this.handleBuyClick}/>
                           
                           
                       </li>
                    ))
                }
            </ul>
        )
    }
}
export default ProductList;