import { Component } from "react";
import { ContactForm } from "./ContactForm";
import { ContactList } from "./ContactList";
import { Filter } from "./Filter";
import { Alert } from "./Alert";
import { nanoid } from 'nanoid';
import PhonebookStyles from "./PhonebookCSS/Pnonebook.module.css";

export class Phonebook extends Component {
    state = {
        contacts: [],
        filter: "",
        isInContacts: false,
        name: ""
    }

    addNewContact = async event => {
        event.preventDefault();

        const {name, number} = event.currentTarget.elements;     

        if (this.state.contacts.some(contact => contact.name.toLowerCase() === name.value.toLowerCase())) {
            this.setState({isInContacts: true, name: name.value});
        }
        else {
            this.setState({isInContacts: false, name: ""});
            let contactsData = this.state.contacts;
            contactsData.push({ id: nanoid(), name: name.value, number: number.value });
            this.setState({contacts: contactsData});
        }

        event.currentTarget.reset();
    }

    closeAlert = () => {
        this.setState({isInContacts: false, name: ""});
    }

    enterFilterData = event => {
        this.setState({ filter: event.currentTarget.value });
    }

    findContactsByName = () => {
        const userSearchData = this.state.filter;
        const searchResults = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(userSearchData.toLowerCase()));
        return searchResults;
    }

    deleteContact = event => {
        const contactId = event.currentTarget.dataset.id;
        this.setState({contacts: this.state.contacts.filter(contact => contact.id !== contactId)});
    }

    render() {
        return(
            <div className={PhonebookStyles.phonebook}>
                <h1 className={PhonebookStyles.phonebookHeader}>Phonebook</h1>
                <ContactForm submitFunction={this.addNewContact} />
                <Alert isInContacts={this.state.isInContacts} name={this.state.name} clickFunction={this.closeAlert} />
                <h2 className={PhonebookStyles.contactsHeader}>Contacts</h2>
                <Filter className="filterInput" changeFunction={this.enterFilterData} />
                <ContactList
                    className="contactList"
                    items={this.state.filter === "" ? this.state.contacts : this.findContactsByName() }
                    clickFunction={this.deleteContact}
                />
            </div>
        );
    }
}