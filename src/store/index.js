import {combineReducers} from 'redux';
import favoritesImgs from './favoriteImgs';

export default combineReducers({
    favorite_images: favoritesImgs,
})