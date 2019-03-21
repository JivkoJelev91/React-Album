export const get_favorites_imgs = (img) => async dispatch => {
   dispatch({
       type: 'GET_IMAGES',
       payload: img
   })
}