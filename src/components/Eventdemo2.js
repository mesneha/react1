import React, { Component } from 'react';
class Eventdemo2 extends React.Component {
    //this is done bcz props method cannot be changed but I want the age to be changed 
    // constructor(){

    // }

    onUpdate() {
        this.age=this.props.age;
        console.log("before age update" + this.age);
        this.age += 5;
        console.log("after age update" + this.age);
    }
    render() {
        return (
            <div>
                <h1>{this.props.age}</h1>
                <button className="btn btn-primary" onClick={() => this.onUpdate()}>
                    Eventdemo2
        </button>
            </div>
        )
    }
}
export default Eventdemo2;