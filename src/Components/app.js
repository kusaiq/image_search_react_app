import React, { Component } from 'react';
import Unsplash from '../api/unsplash.js';
import Search from "./Search";
import ImageList from "./imageList"


class App extends Component {
    state={ images: [] }

    onSearchHandler = async term => {
        const response = await Unsplash.get('/search/photos', {
            params: { query: term }
            
        });
        this.setState({images:response.data.results})
}
 




    render() {
        return (
            <div className=" ui container  " style={{marginTop:"10px"}}>
                <Search onSubmit={this.onSearchHandler} />
                found: {this.state.images.length} images
                <ImageList FoundImages={this.state.images}/>
            </div>

        );
    }
}

export default App;