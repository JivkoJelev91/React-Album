export default (state = [], actions) => {
    if(actions.type === "GET_IMAGES"){
        return [...state, actions.payload]
    }
    return state;
}