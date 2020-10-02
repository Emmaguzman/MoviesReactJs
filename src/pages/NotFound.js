import React, { Component } from 'react';
import ButtonBackToHome from '../Components/ButtonBackToHome';

class notFound extends Component {
    render() {
        return (
            <div>
                <h1 style={{color:"#000",fontSize:30}}>404!</h1>
                <h2>LA PAGINA NO EXISTE</h2>
                <ButtonBackToHome/>
            </div>
        );
    }
}

export default notFound;
