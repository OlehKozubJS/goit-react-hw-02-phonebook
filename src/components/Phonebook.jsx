import { Component } from "react";
import { ContactForm } from "./ContactForm";
import { ContactList } from "./ContactList";
import { Filter } from "./Filter";
//import propTypes from "prop-types";
import { nanoid } from 'nanoid';

export class Phonebook extends Component {
    state = {
        contacts: [
            {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ],
        filter: "",
    }

    addNewContact = async event => {
        event.preventDefault();

        const {name, number} = event.currentTarget.elements;     
        let contactsData = this.state.contacts;
        contactsData.push({ id: nanoid(), name: name.value, number: number.value });
        this.setState({contacts: contactsData});
        console.log(this.state.contacts);

        event.currentTarget.reset();
    }

    findContactsByName = () => {
        let userSearchData = document.querySelector(".filterInput").value;
        const searchResults = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(userSearchData.toLowerCase()));
        return searchResults;
    };

    handleChange = evt => {
        this.setState({ filter: evt.currentTarget.value });
    };

    render() {
        return(
            <div>
                <h1>Phonebook</h1>
                <ContactForm submitFunction={this.addNewContact} />
                <h2>Contacts</h2>
                <Filter className="filterInput" value={this.state.filter} changeFunction={this.handleChange} />
                <ContactList className="contactList" items={this.state.filter === "" ? this.state.contacts : this.findContactsByName() } />
            </div>
        );
    }
}
/*
Phonebook.propTypes = {
    name: propTypes.string.isRequired
};
*/