import { Component } from "react";
import propTypes from "prop-types";
import { nanoid } from 'nanoid/async';

export class Phonebook extends Component {
    state = {
        contacts: [],
        name: this.props.name
    }

    addNewContact = async (e) => {
        e.preventDefault();

        try {
            const idD = await nanoid();
            const nameD = document.querySelector(".contactInput").value;
            let contactsData = this.state.contacts;
            contactsData.push({id: idD, name: nameD});
            this.setState({contacts: contactsData});
            console.log(this.state.contacts);
        }
        catch {
            console.log("Error!");
        }

        document.querySelector(".formm").reset();
    }

    render() {
        return(
            <form className="formm" onSubmit={this.addNewContact}>
                <label>
                    <h2>Phonebook</h2>
                    <div>
                        <h3>Name</h3>
                        <input
                            className="contactInput"
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            //pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                        />
                        <button type="submit">Add contact</button>
                    </div>
                </label>
                <label>
                    <h2>Contacts</h2>
                    <ul>
                        {this.state.contacts.map(contact => <li key={contact.id}>{contact.name}</li>)}
                    </ul>
                </label>
            </form>
        );
    }
}

Phonebook.propTypes = {
    name: propTypes.string.isRequired
};