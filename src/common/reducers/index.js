import { combineReducers } from 'redux';
import news from './news';
import categories from './categories';

const rootReducer = combineReducers({
  news,
  categories,
});

export default rootReducer;
