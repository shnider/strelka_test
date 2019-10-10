import { combineReducers } from 'redux';

import products from '../components/products/reducer';
import filters from '../components/filters/reducer';

export default combineReducers({ products, filters });
