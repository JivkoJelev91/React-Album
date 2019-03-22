import {combineReducers} from 'redux';
import favoritesImgs from './postReducer';
import getFavorites from './getFavoritesReducer';

export default combineReducers({
    favorite_images: favoritesImgs,
    get_favorites: getFavorites
})
