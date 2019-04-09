// import React from 'react';

// class Form2 extends React.Component {

//     constructor() {

//         super();

//         this.state = {

//             value: '',

//             displayValue: ''

//         }

//     }
//     handleInputChange = (event) => {

//         console.log('evt', event.target.value);

//         this.setState({

//             value: event.target.value


//         });

//     }
//     handleClick = () => {

//         this.setState({

//             displayValue: this.state.value.toUpperCase(),

//             value: ''

//         });

//     }
//     render() {
//         return (
//             <div>
//                 <h1 className='myStyle'>{this.state.displayValue}</h1>
//                 <form onSubmit={this.handleSubmit}>
//                     <div>
//                         <label>  Name  :</label>
//                         <input type="text" value='this.state.value' onChange={this.handleInputChange} />
//                     </div>
//                     <div>
//                         <button onClick={this.handleClick}>click</button>
//                     </div>
//                 </form>
//             </div>
//         )

//     }
// }

// export default Form2;


import React from 'react';

class Form2 extends React.Component {

    constructor() {

        super();

        this.state = {

            value: '',

            displayValue: ''

        }

    }

    handleInputChange = (event) => {

        console.log('evt', event.target.value);

        this.setState({

            value: event.target.value

        });

    }

    handleClick = () => {

        this.setState({

            displayValue: this.state.value.toUpperCase(),

            value: ''

        });

    }

    render() {

        return (

            <div>

                <h1
                    className='myStyle'>{this.state.displayValue}</h1>

                <label>name :</label>

                <input value={this.state.value}
                    onChange={this.handleInputChange} />

                <button onClick={this.handleClick}>click</button>

            </div>

        );

    }

}

export default Form2;