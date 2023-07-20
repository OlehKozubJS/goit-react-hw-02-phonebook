import { Component } from "react";
import propTypes from "prop-types";
import { nanoid } from 'nanoid/async';

const INITIAL_STATE = {
    login: "",
    email: "",
    password: "",
};

export class Phonebook extends Component {
    state = {
        contacts: [],
        name: this.props.name
    }

    addNewContact = async evt => {
        evt.preventDefault();

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

        this.reset();
    }
    
    reset = () => {
        this.setState({ ...INITIAL_STATE });
    };

    render() {
        return(
            <>
                <h2>Phonebook</h2>
                <form className="phonebook" onSubmit={this.addNewContact}>
                    <label>
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
                    </label>
                    <label>
                        <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        />
                    </label>
                    <button type="submit">Add contact</button>
                </form>
                <div>
                    <h2>Contacts</h2>
                    <ul>
                        {this.state.contacts.map(contact => <li key={contact.id}>{contact.name}</li>)}
                    </ul>
                </div>
            </>
        );
    }
}

Phonebook.propTypes = {
    name: propTypes.string.isRequired
};