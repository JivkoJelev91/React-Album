import { GET_IMAGES } from './types';

export const get_favorites_imgs = (img) => dispatch => {
   dispatch({
       type: GET_IMAGES,
       payload: img
   })
}