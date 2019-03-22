import React, { Component } from 'react'
import { GridList, GridTile } from 'material-ui/GridList/';
import CircularProgress from 'material-ui/CircularProgress';
import IconButton from 'material-ui/IconButton';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import Favorite from 'material-ui/svg-icons/action/favorite';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { Pagination } from 'semantic-ui-react';
import {get_favorites_imgs, save_favorite_icons} from '../../actions/postActions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
 
class Images extends Component {
   
    state = {
        images: [],
        open: false,
        currentImg: '',
        totalPage: 0,
        currentPage: 1,
    };
    
    perPage = 20;
    favorites= [];
    array = [];
   
    componentDidMount(){
        this.getData();
    }

    getData = () => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then((res) => {
            let prev = this.perPage * (this.state.currentPage-1);
            let next = this.perPage * this.state.currentPage;
            let totalPage = res.data.length / this.perPage;
            this.setState({
                images: res.data.slice(prev,next),
                totalPage: totalPage,
            });
        })
        .catch(err => console.log(err));
    }
 
    getCurrentPage = (event, data) => {
        const nextPage = data.activePage;
        this.setState({currentPage: nextPage});
        this.getData();
    }
 
    getFavoriteImg = (e,img) => {
        let index = this.array.indexOf(img.id); 
        if(index > -1) {
            this.array.splice(index, 1);
            this.favorites.splice(index,1);
        }else{
            this.array.push(img.id);
            this.favorites.push(img);
        }
        this.props.get_favorites_imgs([...new Set(this.favorites)]);
        this.props.save_favorite_icons([...new Set([...this.props.get_favorites_icons,...this.array])]);
    }
 
    handleOpen = img => this.setState({open:true,currentImg: img})
 
    handleClose = () => this.setState({open:false})
 
    render() {
        const actions = [
            <FlatButton label="Close" primary={true} onClick={this.handleClose} />
        ];
        console.log(this.props.get_favorites_icons)
        if(this.state.images.length > 0){
            return (
                <div>
                    <GridList cols={4}>
                        {/* All images of current page  */}
                        {this.state.images.map((img) => (
                            <GridTile
                            title={img.title}
                            key={img.id}
                            actionIcon = {
                                <IconButton >
                                    <div className="icons">
                                        <ZoomIn color='#000' onClick={() => this.handleOpen(img.url)}/>
                                        <Favorite onClick={(e) => this.getFavoriteImg(e,img)} color={this.props.get_favorites_icons.indexOf(img.id) > -1 ? "red" : "black"}/>
                                    </div>
                                </IconButton>
                            }>
                                <img src={img.url} alt={img.title}/>
                            </GridTile>
                        ))}
                    </GridList>
                    {/*The modal with clicked img */}
                    <Dialog
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}>
                        <img src={this.state.currentImg} alt="img" style={{width: '100%'}} />
                    </Dialog>
                    {/* Paginator */}
                    <div id="paginator">
                        <Pagination
                        defaultActivePage={1}
                        totalPages={this.state.totalPage}
                        onPageChange={this.getCurrentPage}
                         />
                    </div>
                </div>
            )
        }else{
            return (
                <div id="wrapper">
                    {/* Loader */}
                    <div className="spinner">
                        <CircularProgress />
                    </div>
                </div>
            )
        }
    }
}

Images.propTypes = {
    favorite_images: PropTypes.array.isRequired,
    get_favorites_icons: PropTypes.array.isRequired
}
 
function map_state_to_props(state){
    return {
        favorite_images: state.favorite_images,    // must be same as initialstate in the reducer
        get_favorites_icons:  state.get_favorites
    }
}
 
 
export default connect(map_state_to_props,{get_favorites_imgs, save_favorite_icons})(Images)