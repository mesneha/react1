//take the reference of input field

import React from 'react';

class RefsDemo  extends React.Component {
    constructor()
    {
        super()
        //step1------------
        this.myinputRef=React.createRef();
    }
  //step3---
    componentDidMount()
    {     
        this.myinputRef.current.focus();
        console.log(this.myinputRef);
    }
    render()
    {
        return(
            <div >
                {/* //step2 */}
                <input type="text" ref={this.myinputRef}/>
                <button>Click</button>
            </div>
        )
    }
}

export default RefsDemo;