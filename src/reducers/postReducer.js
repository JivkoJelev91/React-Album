import { GET_IMAGES } from '../actions/types';

export default (state = [], actions) => {
    if(actions.type === GET_IMAGES){
        return actions.payload
    }
    return state;
}

