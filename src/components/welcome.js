import React,{Component} from 'react'

 class Welcome extends Component{

    render(){

        let message="";
        if(true){
            message ="Hello Friends";
        }
        return(
            <div>
            <h1>hello from welcome component </h1>
              <p>{2+2}</p>
              <p>{message}</p>
            <button className="btn btn-success">hi</button>
            </div>
        )
    }
}

export default Welcome;