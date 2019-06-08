import React from 'react';
class ProductList extends React.Component{

    state={
    products:[
        {id: 0, name:'Apple'},
        {id: 1, name:'Coofie'}
    ]}

    render(){
        return(
            <ul>
                {
                    this.state.products.map(p =>(
                       <li>
                           {p.name}
                       </li>
                    ))
                }
            </ul>
        )
    }
}
export default ProductList;