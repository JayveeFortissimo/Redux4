import {configureStore} from '@reduxjs/toolkit';
import Data from './DataBurger.js';
import MainCart from './MainCart.js';

const Store = configureStore({
reducer:{Datax:Data,Carts:MainCart}
})


export default Store;