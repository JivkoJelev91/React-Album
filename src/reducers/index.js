import {combineReducers} from 'redux';
import favoritesImgs from './postReducer';

export default combineReducers({
    favorite_images: favoritesImgs,
})
