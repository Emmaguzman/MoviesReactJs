import React, { Component } from 'react';
import { Title } from '../Components/Title';
import {SearchForm} from '../Components/SearchForm';
import {MoviesList} from '../Components/MoviesList';


class Home extends Component {
    state={
        useSearch:false,
        results:[]
      }  
    
    
    _handleResults=(results)=>{
      this.setState({results,useSearch:true})
    }
    
    _renderResults(){
      return  this.state.results.length === 0
      ? <p>NO HAY NADA POR ACA</p>
      : <MoviesList movies={this.state.results}/>
    }
    
    render() {
        return (
            <div>
                <Title>Search movie</Title>
                <div className="SearchForm-wapper">
                    <SearchForm onResults={this._handleResults} />
                </div>
                {this.state.useSearch ?
                    this._renderResults() :
                    <small>Usar el buscador de peliculas</small>}
            </div>
        );
    }
}

export default Home;
