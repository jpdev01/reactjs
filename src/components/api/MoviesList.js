import React, { Component } from 'react';
import api from './api';

class MoviesList extends Component{

    state = {
        movies: []
    };

    //ao usar componentDidMount, e usado imediatamente ao uma atualizacao ocorrer
    // await por causa do async

    // busca na api
    async componentDidMount(){
        const response = await api.get('');

        this.setState({movies: response.data});
    }


    getFilmeList = () => {
        const { movies } = this.state;
        return movies.map(movie => (
            <li key={movie.show.id}>
                <p>
                    <strong>Título: </strong>
                    {movie.show.name}
                    <span>
                    {movie.show.url}
                    </span>
                    </p>
            </li>
        ));
    }

    render(){
        
        return (
            <div>
                <h1>Lista de filmes:</h1>
                {this.getFilmeList()}
            </div>
        );
    }
}

export default MoviesList;