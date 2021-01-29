import React, { Component } from 'react';


class Search extends Component {
    state = { term: " " };

    mySubmitHandler = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term)
    }


    SearchHandler = (event) => {
        this.setState({ term: event.target.value })
        console.log("term")
    }

    render() {
        return (

            <div className=" ui segment ">
                <form className="ui form " onSubmit={this.mySubmitHandler} >
                    <div className="ui text container">
                    <div className="field ui icon input ">
                        
                        <input  type="text" placeholder="Search.." name="searchValue" onChange={this.SearchHandler} value={this.state.term} />
                        <button type="submit" className="ui button"> <i className="search icon"></i> </button>
                        
                        
                        </div>
                        </div>

                </form>
                </div>
        );
    };
}



export default Search;
    

