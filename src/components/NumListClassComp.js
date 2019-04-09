import React, { Component } from 'react';
class NumListClassComp extends React.Component {
    render() {
        return (

            <ul>
                {/* <li>1</li>
               <li>2</li>
               <li>3</li>
               <li>4</li> */}

                {this.props.numbers.map((n, i) => <li key={i}>  {n}  </li>)
                    //  <li key={i}>  {n}  </li>)

                    // <li> key={i}  {n}  </li>)
                }

            </ul>

        )
    }


}

export default NumListClassComp;