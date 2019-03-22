import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class Favorites extends Component {

    componentWillReceiveProps(nextProp){
        console.log(nextProp);
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

Favorites.propTypes = {
    favorite_images: PropTypes.array.isRequired
}

function map_state_to_props(state){
    return {
        favorite_images: state.favorite_images    // must be same as initialstate in the reducer
    }
}


export default connect(map_state_to_props)(Favorites);

