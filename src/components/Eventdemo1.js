import React, { Component } from 'react';
class Eventdemo1 extends React.Component {

    callEvent() {
        console.log("Im from event");
    }
    render() {
        return(
        <button className="btn btn-info" onClick={() => this.callEvent()}>Eventdemo1</button>)
    }
}
export default Eventdemo1;