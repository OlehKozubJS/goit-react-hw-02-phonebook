import { Component } from "react";
import propTypes from "prop-types";
import { nanoid } from 'nanoid/async';

export class Phonebook extends Component {
    state = {
        contacts: [],
        name: this.props.name
    }

    addNewContact = async () => {
        try {
            const idD = await nanoid();
            const nameD = document.querySelector(".contactInput").value;
            let contactsData = this.state.contacts;
            contactsData.push({id: idD, name: nameD});
            this.setState(state => ({contacts: contactsData}));
            console.log(this.state.contacts);
        }
        catch {
            console.log("Error!");
        }
    }

    render() {
        return(
            <div>
                <h2>{this.state.name}</h2>
                <input
                    className="contactInput"
                    type="text"
                    name="name"
                    //pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                    //pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                <button onClick={this.addNewContact}>Add contact</button>
            </div>
        );
    }
}

Phonebook.propTypes = {
    name: propTypes.string.isRequired
};