import React, { Component } from 'react';
class Hobbies extends React.Component {
    render() {
        return (
            <div>
                <p>NAME:{this.props.name}</p>
                <p>Age:{this.props.age}</p>

                <h3>HOBBIES:</h3>
                <ul>
                    {this.props.user.hobbies.map((hobbies, i) => <li>{hobbies} </li>)}
                </ul>
                <p>{this.props.children}</p>
            </div>
        )
    }
}

export default Hobbies;