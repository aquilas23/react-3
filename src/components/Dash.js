import React, { Component } from 'react';

export default class Dash extends Component {
    constructor(props){
        super(props);
        this.state={
            id :0
        }
    }

    render() {
        const mappedData = this.state.data.map((element,i) =>(
            <div key={this.state.data.id}>
                <p> {element.name.first}</p>
                <p> {element.name.last}</p>
                <p> {element.city}</p>
                <p> {element.title}</p>
                <p> {element.favoriteMovies}</p>
                <button> Next</button>
                <button> Prev</button>

            </div>

        ));
        return (

        <div> {mappedData} </div>
        )
    }
}


