import { combineReducers } from 'redux';

import products from '../components/products/reducer';
import search from '../components/header/search/reducer';
import filters from '../components/filters/reducer';

export default combineReducers({ products, search, filters });
