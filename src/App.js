import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Welcome from './components/welcome';
import Funclassdemo from './components/functonaldemo';
import Greeting from './components/Greetings';
import GreetingClassComponent from './components/Greeting';
import NumListClassComp from './components/NumListClassComp';
import Hobbies from './components/Hobbies';
import Eventdemo1 from './components/Eventdemo1';
import Eventdemo2 from './components/Eventdemo2';
import StateDemo from './components/StateDemo';
import Counter from './components/Counter';
import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';
import Form from './components/Form';
import Form1 from './components/Form1';
import Form2 from './components/Form2';
import RefsDemo from './components/RefsDemo';
import CustomerInfo from './components/CustomerInfo';
import CustomerDisplay from './components/CustomerDisplay';
import LifecycleB from './components/LifecycleB';
import LifecycleA from './components/LifecycleA';
import ViewContact from './components/ViewContact';
import AddContact from './components/AddContact';
import ShowContact from './components/ShowContact';
import Image from './components/Image';
import   ParentComponent from './components/Propstype';
import Parent from './components/Parent';


class App extends Component {
  render() {

    let numbers = [11, 12, 13, 14, 15];

    let user = {
      name: "Sneha K",
      hobbies: ["Sports", " Swimming", "Music", "Drawing"],
    };

    return (



      //   <div className="App">
      //     <header className="App-header">

      //       <img src={logo} className="App-logo" alt="logo" />
      //       <p>
      //         Edit <code>src/App.js</code> and save to reload.
      //       </p>
      //       <a
      //         className="App-link"
      //         href="https://reactjs.org"
      //         target="_blank"
      //         rel="noopener noreferrer"
      //       >
      //         Learn React
      //       </a>
      //     </header>
      //   </div>
      // );
      // <div>
      /* <h1> Hello Welocome to my App</h1> */
      /* <h1> this is a another tag</h1> */
      // <Welcome/>
      /* < Funclassdemo/> */

      // </div>

      // {/* <Greeting name="sneha" />
      //       <Greeting name="diff1" />
      //       <GreetingClassComponent name="snehaK" />
      //       <NumListClassComp numbers={numbers} />
      //       <Hobbies user={user} name={user.name} age={20} >
      //         <p>CHILD</p>
      //       </Hobbies>

      //       <Eventdemo1/> */}
      //       {/* <br/>
      //       <Eventdemo2 age={25}/>

      //       <StateDemo message="Welcome Guest"/> */




      // <div className="container">
      //   <div className="row">
      //     <div className="col-xs-12">
      //       <BrowserRouter>
      //         <div>
      //           <ul>
      //             <li>
      //               <Link to="/">Home</Link>
      //             </li>
      //             <li>
      //               <Link to="/about">About</Link>
      //             </li>
      //           </ul>
      //         </div>

      //         <switch>
      //           <Route exact path="/" component={Home} />
      //           <Route path="/about" component={About} />
      //         </switch>
      //       </BrowserRouter>

      //       <h1>Welcome to routing module</h1>
      //     </div>
      //   </div>
      // </div>


      <Router>
        <div>
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route path="/form" component={Form} />
              <Route exact path="/form1" component={Form1} />
              <Route exact path="/form2" component={Form2} />
              <Route exact path="/refsdemo" component={RefsDemo} />
              <Route exact path="/addanddelete" component={CustomerInfo} />
              <Route exact path="/addanddelete" component={CustomerDisplay} />
              <Route exact path="/lifecycleB" component={LifecycleB} />
              <Route exact path="/lifecycleA" component={LifecycleA} />
              <Route exact path="/viewcontact" component={ViewContact} />
              <Route exact path="/viewcontact" component={AddContact} />
              <Route exact path="/viewcontact" component={ShowContact} />
              <Route exact path="/imagerendering" component={Image} />
              {/* <Route exact path="/propstype" component={Propstype} /> */}


            </Switch>
          </div>
        </div>
      </Router>


    );
  }
}

export default App;
