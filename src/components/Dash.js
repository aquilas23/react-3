import React, { Component } from 'react';

export default class Dash extends Component {
    constructor(props){
        super(props);
        this.state={
            id :0
        }
    }

    render() {
        const {data}=this.props
        console.log(data)

        // const mappedData = data.map((element,i) =>(
        //     <div key={data.id}>
        //         <p> {element.city}</p>
        //         <p> {element.country}</p>
        //     </div>

        // ));

        return (
            <div>
                {/* {mappedData} */}
                {/* {this.props.data[0]} */}
            </div>
        )
    }
}
