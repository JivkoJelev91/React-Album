
import { GET_FAVORITES } from '../actions/types';

export default (state = [], actions) => {
    if(actions.type === GET_FAVORITES){
        return actions.payload
    }
    return state;
}