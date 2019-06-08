import {observable} from 'mobx';

class ProductStore{
    @observable products = [
        {id: 0, name:'Apple', porm: false},
        {id: 1, name:'Coofie', porm: true},
        {id: 2, name:'teee', porm: false},
        {id: 3, name:'griii', porm: true},
        {id: 4, name:'strreee', porm: false},
    ]
}

const store = new ProductStore();
export default store;