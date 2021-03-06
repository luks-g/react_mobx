import React from 'react';
import ProductList from '../components/ProductList.js';
import {Provider} from 'mobx-react';
import productStore from '../stores/ProductStore';
const Root = () => (
    <Provider productStore={productStore}>
        <ProductList/>
    </Provider>

)
export default Root;