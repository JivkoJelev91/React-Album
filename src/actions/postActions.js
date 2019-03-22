import { GET_IMAGES } from './types';
import { GET_FAVORITES } from './types';

export const get_favorites_imgs = (img) => dispatch => {
   dispatch({
       type: GET_IMAGES,
       payload: img
   })
}

export const save_favorite_icons = (icons) => dispatch => {
    dispatch({
       type: GET_FAVORITES,
        payload: icons
    })
}