import React from 'react';
class CustomerDisplay extends React.Component {


    render() {
        const user = this.props.userData;
        return (
            <div>
                <h3>Displaying the customer information from customerInfo:-</h3>
                <p> {user.userName}</p>
                <p> {user.userEmail}</p>
                <p> {user.userMobile}</p>
                <p> {user.userAddress}</p>
                <p> {user.userDescription}</p>
                <p> {user.userDateofVisit}</p>

                <button  onClick={() => this.props.deleteCustomer()}>  Delete  </button>
            </div>
        )
    }
}

export default CustomerDisplay;