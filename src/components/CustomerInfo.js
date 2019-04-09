import React from 'react';
import CustomerDisplay from './CustomerDisplay'
class CustomerInfo extends React.Component {
    constructor() {

        super()

        this.state = {
            user: {
                userName: '',
                userEmail: '',
                userMobile: '',
                userAddress: '',
                userDescription: '',
                userDateofVisit: ''
            } ,//user end

            display : false
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        // alert(`${this.state.user.userName}`);
        // alert(`${this.state.user.userEmail}`);
        // alert(`${this.state.user.userMobile}`);
        // alert(`${this.state.user.userAddress}`);
        // alert(`${this.state.user.userDescription}`);
        // alert(`${this.state.user.userDateofVisit}`);
        alert(`Name : ${this.state.user.userName} , Email : ${this.state.user.userEmail} ,Mobile : ${this.state.user.userMobile}, Address : ${this.state.user.userAddress}, Description : ${this.state.user.userDescription} ,Visit :  ${this.state.user.userDateofVisit}`);
        console.log(`Name:${this.state.user.userName},Email : ${this.state.user.userEmail} ,Mobile : ${this.state.user.userMobile}, Address : ${this.state.user.userAddress}, Description : ${this.state.user.userDescription} ,Visit :  ${this.state.user.userDateofVisit}`);

        this.setState({display:true})
    }


    UpdateState(ctrl, value) {

        const { user } = this.state; //get the current state
        user[ctrl] = value;         //update the entered user
        this.setState({ user });   //update the  new user

    }

    resetState() {
        this.setState(
            {
                user: {
                    userName: '',
                    userEmail: '',
                    userMobile: '',
                    userAddress: '',
                    userDescription: '',
                    userDateofVisit: ''
                }
            }
        )
    }





    render() {

        const { user } = this.state;

        return (
            <div>
                <h1>...State Add And Delete...</h1> <br />

                <form onSubmit={(e) => this.handleSubmit(e)}>

                    <label>Name : </label>
                    <input type="text" value={user.userName} onChange={(e) => this.UpdateState('userName', e.currentTarget.value)} />
                    <br />

                    <label>Email : </label>
                    <input type="text" value={user.userEmail} onChange={(e) => this.UpdateState('userEmail', e.currentTarget.value)} />
                    <br />

                    <label>Mobile : </label>
                    <input type="text" value={user.userMobile} onChange={(e) => this.UpdateState('userMobile', e.currentTarget.value)} />
                    <br />

                    <label>Address : </label>
                    <input type="text" value={user.userAddress} onChange={(e) => this.UpdateState('userAddress', e.currentTarget.value)} />
                    <br />

                    <label>Description: </label>
                    <input type="text" value={user.userDescription} onChange={(e) => this.UpdateState('userDescription', e.currentTarget.value)} />
                    <br />

                    <label>Date of Visit: </label>
                    <input type="text" value={this.userDateofVisit} onChange={(e) => this.UpdateState('userDateofVisit', e.currentTarget.value)} />
                    <br />

                    <button type="submit">  Submit </button>
                </form>

                {/* <CustomerDisplay userData={this.state.user} deleteCustomer={(e) => this.resetState()} /> */}

                {
                    this.state.display ?
                    <CustomerDisplay deleteCustomer={(e) => this.resetState()} userData={this.state.user} /> :null
                }
            </div>


        )
    }
}



export default CustomerInfo;