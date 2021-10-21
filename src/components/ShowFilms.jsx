import React from 'react';
import FilmCards from './FilmCards';


export default (props) => {
    let i = 0;
    return (
        <React.Fragment>
            <div className="d-flex flex-wrap justify-content-around" id="showFilms">
                { props.films.map((film) => {
                    console.log(film);
                    return <FilmCards 
                                key={i++}
                                id={film.id} 
                                title={film.title} 
                                description={film.description}
                                director={film.director} />;
                })}
            </div>
        </React.Fragment>
    )
}