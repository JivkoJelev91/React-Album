import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { GridList, GridTile } from 'material-ui/GridList/';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Dialog from 'material-ui/Dialog';

class Favorites extends Component {

    state = {
        images: [],
        open: false,
    }

    componentDidMount(){
        this.setState({
            images: this.props.favorite_images.sort((a,b) => a.id - b.id) // Sort favorite images
        });
    }

    handleOpen = img => this.setState({open:true,currentImg: img})
 
    handleClose = () => this.setState({open:false})

    render() {
        if(this.props.isActive && this.props.favorite_images.length > 0){
            return (
                <div>
                     <GridList cols={4}>
                        {/* All images of current page  */}
                        {this.state.images.map((img, index) => (
                            <GridTile
                            title={img.title}
                            key={index}
                            actionIcon = {
                                <IconButton >
                                    <ZoomIn color='#000' onClick={() => this.handleOpen(img.url)}/>
                                </IconButton>
                            }>
                                <img src={img.url} alt={img.title}/>
                            </GridTile>
                        ))}
                    </GridList>
                    {/*The modal with clicked img */}
                    <Dialog
                    actions={<FlatButton label="Close" primary={true} onClick={this.handleClose} />}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}>
                        <img src={this.state.currentImg} alt="img" style={{width: '100%'}} />
                    </Dialog>
                </div>
            )
        }else{
            return <h1>There is no favorite image!</h1>
        }
        
    }
}

Favorites.propTypes = {
    favorite_images: PropTypes.array.isRequired,
    isActive: PropTypes.bool.isRequired
}

function map_state_to_props(state){
    return {
        favorite_images: state.favorite_images,    // must be same as initialstate in the reducer
    }
}

export default connect(map_state_to_props)(Favorites);

