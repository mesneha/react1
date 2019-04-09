import React from 'react';
class ShowContact extends React.Component {

    render() {

        return (
            <div>
                <h2>ShowContact</h2>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>Contact Name</th>
                            <th>Contact Number</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.props.contacts.map((contact) =>
                            <tr key={contact}>
                                <td>{contact.contactname}</td>
                                <td>{contact.contactnumber}</td>

                                <td>
                                    <button className="btn btn-danger"
                                     onClick={() => this.props.deleteContact(contact.id)}>
                                        X </button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>

            </div>



        )
    }
}
export default ShowContact;