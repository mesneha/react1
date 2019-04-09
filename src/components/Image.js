import React, { Component } from 'react';
class Images extends React.Component {

    constructor() {
        super()
        this.state = {  display: false}

    }

    change = () => {this.setState({ display: !this.state.display })

    }

    render() {

        return (

            <div>
                
                {
                   this.state.display ?
                  <img src={require('./download.jfif')} /> : 
                  <img src={require('./guest.jfif')} />
                }
               <br/><br/>
              <button onClick={this.change} className="btn btn-info">Change image</button>
            </div>
        )
    }
}



export default Images;