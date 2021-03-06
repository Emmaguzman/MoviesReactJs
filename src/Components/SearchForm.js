import React, { Component } from 'react';

const API_KEY="1ff624ca";
export class SearchForm extends Component {
state={
    inputMovie:''
}

_handleChange=(e)=>{
    this.setState({inputMovie:e.target.value})
}
_handleSubmit=(e)=>{
    e.preventDefault();
//    alert(this.state.inputMovie);
const {inputMovie}=this.state

fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
    .then(res=>res.json())
    .then(results=>{
        //console.log(results)
        const{Search=[] ,totalResults="0"}=results;
        //console.log({Search=[],totalResults="0"});   
        this.props.onResults(Search);
    })
}

    render() {
        return (
            <form onSubmit={this._handleSubmit}>
            <div>
                <div className="field has-addons">
                    <div className="control">
                        <input className="input"
                            type="text"
                            onChange={this._handleChange}
                            placeholder="Find a repository" />

                        <div className="control">
                            <button className="button is-info">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            </form>
        );
    }
}

export default SearchForm;


