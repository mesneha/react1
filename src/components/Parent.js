import React, { Component } from 'react';
class Parent extends React.Component {



    change = () => {this.setState({ display: !this.state.display })

    }

    render() {

        return (

          <div>
              <h1> Am parent</h1>
               <p>{this.props.children.length}</p>         
               <p>{this.props.children}</p>      
               <div>{this.props.children.map(element =>
                                             <p> {element.type}</p>
                                            )}
                 </div> 
          </div>
        )
    }
}



export default Parent;