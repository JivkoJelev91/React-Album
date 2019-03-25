import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import NavBar from './navbar/NavBar';
import Images from './images/Images';
import Favorites from './Favorites';
import { Button } from 'semantic-ui-react';
import FlatButton from 'material-ui/FlatButton';

class AllImages extends Component {

    state = {isActive: false};
  
    getImages = () => this.setState({isActive: !this.state.isActive})

    clearAllFavoriteImgs = () => {
        localStorage.clear();
        window.location.reload(); 
    }
    
    render() {
        const actions = [
            <FlatButton label="Close" primary={true} onClick={this.handleClose} />
        ];
        return (
            <div>
                <NavBar />
                    <Button fluid className="favoriteBtn" onClick={this.getImages}>
                        {this.state.isActive ? <h2>All images</h2> : <h2>Favorite images</h2>}
                    </Button>
                    <div>
                        {!this.state.isActive ? <Images actions={actions}/> : <Favorites isActive={this.state.isActive} actions={actions}/>}
                    </div>
                    {this.props.favorite_images.length > 0 ?
                    <Button fluid className="favoriteBtn" onClick={this.clearAllFavoriteImgs}>
                    {this.state.isActive ? <h2>Clear all Favorite Images</h2> : null }
                     </Button> : null}
            </div>
        )
    }
}

AllImages.propTypes = {
    favorite_images: PropTypes.array.isRequired,
}

function map_state_to_props(state){
    return {
        favorite_images: state.favorite_images,    // must be same as initialstate in the reducer
    }
}

export default connect(map_state_to_props)(AllImages);
