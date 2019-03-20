import React, { Component } from 'react'
import { GridList, GridTile } from 'material-ui/GridList/';
import IconButton from 'material-ui/IconButton';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import CircularProgress from 'material-ui/CircularProgress';
import axios from 'axios';
import { Pagination } from 'semantic-ui-react'

class Images extends Component {

    state = {
        images: [],
        open: false,
        currentImg: '',
        paging: 5,
        perPage: 20,
        totalPage: 0,
        defaultPage: 1,
        currentPage: 1,
    };

    componentDidMount(){
        this.callApi();
    }

    callApi = () => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then((res) => {
            let prev = this.state.perPage * (this.state.currentPage-1);
            let next = this.state.perPage * this.state.currentPage;
            let totalPage = res.data.length / this.state.perPage;
            this.setState({
                images: res.data.slice(prev,next),
                totalPage: totalPage
            });
        })
        .catch(err => console.log(err));
    }

    getCurrentPage = (event, data) => {
        const nextPage = data.activePage;
        this.setState({currentPage: nextPage});
        this.callApi();
    }

    handleOpen = (img) => {
        this.setState({
            open:true,
            currentImg: img
        })
    }

    handleClose = () => {
        this.setState({
            open:false,
        })
    }


    render() {
        const actions = [
            <FlatButton label="Close" primary={true} onClick={this.handleClose} />
        ];

        if(this.state.images.length > 0){
            return (
                <div>
                    <GridList cols={4}>
                        {this.state.images.map(img => (
                            <GridTile
                            title={img.title}
                            key={img.id}
                            actionIcon = {
                                <IconButton onClick={() => this.handleOpen(img.url)}>
                                    <ZoomIn color='#000'/>
                                </IconButton>
                            }>
                                <img src={img.url} alt={img.title}/>
                            </GridTile>
                        ))}
                    </GridList>
                    <Dialog
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}>
                        <img src={this.state.currentImg} alt="" style={{width: '100%'}} />
                    </Dialog>
                    <div id="paginator">
                        <Pagination 
                        defaultActivePage={this.state.defaultPage}
                        totalPages={this.state.totalPage}
                        onPageChange={this.getCurrentPage}
                         />
                    </div>
                </div>
            )
        }else{
            return (
                <div id="wrapper">
                    <div className="spinner">
                        <CircularProgress />
                    </div>
                </div>
             
            )
        }
    }
}

export default Images;