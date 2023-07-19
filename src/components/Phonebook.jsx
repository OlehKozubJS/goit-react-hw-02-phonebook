import { Component } from "react";
import propTypes from "prop-types";
import { nanoid } from 'nanoid/async';

export class Phonebook extends Component {
    state = {
        contacts: [],
        name: this.props.name
    }

    contactsData = [];

    addNewContact = async () => {
        try {
            const id = await nanoid();
            const name = document.querySelector(".contactInput").value;
            this.contactsData.push({id: id, name: name});
            //this.setState(state => ({contacts: [...state.contacts].push({id: id, name: name})}));
            this.setState({contacts: this.contactsData});
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