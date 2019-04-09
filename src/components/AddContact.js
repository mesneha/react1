import React from 'react';
class AddContact extends React.Component {
    contactname = React.createRef();
    contactnumber = React.createRef();

    handleAddContact = () => {
        let contObject = 
        {
            contactname : this.contactname.current.value,
            contactnumber : this.contactnumber.current.value
        };
         alert(contObject.contactname);
        this.props.addContact(contObject)
    }

    render() {

        return (
            <div className="well">
                <h2>AddContact</h2>
                <form>
                    Contact Name : &nbsp;
                <input ref={this.contactname} /><br />

                    Contact Number :&nbsp;
                <input ref={this.contactnumber} /><br /><br />

                    <button onClick={this.handleAddContact} className="btn btn-success">
                        Add New Contact
                    </button>

                </form>

            </div>
        )
    }
}
export default AddContact;