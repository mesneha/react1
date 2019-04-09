// import React, { Component } from 'react';
// class Form1 extends React.Component {
//     render() {
//         return <h1> ...............</h1>
//     }
// }

// export default Form1;

import React from 'react';

import ReactDOM from 'react-dom';

class FormEg extends React.Component {



    render() {

        const myStyle = {
            color: 'white',
            backgroundColor: 'green'

            //c is in caps in bgcolor
        }

        return (<div>
            <h1 style={myStyle}>  Inline style  </h1>
        </div>
        );
    }
}

export default FormEg;


