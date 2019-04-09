import React from 'react';
import AddContact from './AddContact';
import ShowContact from './ShowContact';
import Axios from 'axios';

class ViewContact extends React.Component {
    constructor() {
        super()
        this.state = { contacts: [] }
    }
    //state = { contacts: [] }
    // componentDidMount() {
    //    
    // }
    componentDidMount() {

        Axios.get("http://localhost:3000/contacts").then(res => {

            const contacts = res.data;

            this.setState({ contacts });
            this.getContacts();

        })

    }

    baseURL = "http://localhost:3000/contacts/";
    getContacts = () => {

        Axios.get(this.baseURL).then((response) => {
            this.setState({ contacts: response.data })

        });
    }

    addContact = (contact) => {
        Axios.post(this.baseURL, contact).then((response) => {
            this.getContacts();
            alert("Contact Added");

        })
    }

    deleteContact = (id) => {
        Axios.delete(this.baseURL + id).then((response) => {
            this.getContacts();
            alert("Contact Deleted")
        },
            (err) => {
                this.setState({ errors: err })
            })

    }

    render() {
        return (
         <div>
         <h1>...Manage Contact...</h1>
              <AddContact addContact={(contact) => this.addContact(contact)} />
             <ShowContact contacts={this.state.contacts}  deleteContact={this.deleteContact} />
        </div>

        )
    }
}
export default ViewContact;