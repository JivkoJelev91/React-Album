import React, { Component } from 'react';
import NavBar from './navbar/NavBar';
import Images from './images/Images';
import Favorites from './Favorites';
import { Button } from 'semantic-ui-react';

class AllImages extends Component {

    state = {isActive: false,}
  
    getImages = () => this.setState({isActive: !this.state.isActive});
    
    render() {
        return (
            <div>
                <NavBar />
                    <Button fluid className="favoriteBtn" onClick={this.getImages}>
                        {this.state.isActive ? 'ALL IMAGES' : 'FAVORITE IMAGES'}
                    </Button>
                    <div>
                        {!this.state.isActive ? <Images /> : <Favorites isActive={this.state.isActive}/>}
                    </div>
            </div>
        )
    }
}

export default AllImages;
