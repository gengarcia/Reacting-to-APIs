import React from 'react';
import PeopleCards from './PeopleCards';

export default (props) => {
    let i = 0;
    return (
        <React.Fragment>
            <div className="d-flex flex-wrap justify-content-around" id="showFilms">
                { props.people.map((person) => {
                    console.log(person);
                    return <PeopleCards 
                                key={i++}
                                id={person.id} 
                                name={person.name} 
                                age={person.age}
                                gender={person.gender}
                                url={person.url} />;
                })}
            </div>
        </React.Fragment>
    )
}