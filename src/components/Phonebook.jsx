import { Component } from "react";
//import propTypes from "prop-types";
import { nanoid } from 'nanoid';
//import { ReactDOM } from "react";

export class Phonebook extends Component {
    state = {
        contacts: [
            {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
          ],
        filter: "",
        name: "",
        number: ""
    }

    addNewContact = async event => {
        event.preventDefault();

        const {name, number} = event.currentTarget.elements;
        const idData = nanoid();
        const nameData = name.value;
        const numberData = number.value;
        
        let contactsData = this.state.contacts;
        contactsData.push({ id: idData, name: nameData, number: numberData });
        this.setState({contacts: contactsData});
        console.log(this.state.contacts);

        event.currentTarget.reset();
    }
    
    reset = () => {
        this.setState({ filter: "", name: "", number: "" });
    };

    renderContactList = () => {
        return this.state.contacts.map(contact => <li key={contact.id}>{contact.name}: {contact.number}</li>);
    }

    findContactsByName = event => {
        const userSearchData = event.currentTarget.value;
        const contactList = document.querySelector(".contactList");

        contactList.innerHTML = "";

        if (userSearchData === "") {
            contactList.append(...this.renderContactList());
        }
        else { 
            const searchResults = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(userSearchData.toLowerCase()));
            contactList.append(...searchResults.map(searchResult => <li key={searchResult.id}>{searchResult.name}: {searchResult.number}</li>));
        }
    };

    render() {
        return(
            <div>
                <h1>Phonebook</h1>
                <form className="phonebook" onSubmit={this.addNewContact}>
                    <label>
                        <h3>Name</h3>
                        <input
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                        />
                    </label>
                    <label>
                        <h3>Number</h3>
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
                    <h3>Find contacts by name</h3>
                    <input type="text" onChange={this.findContactsByName} />
                    <ul className="contactList">
                        {this.renderContactList()}
                    </ul>
                </div>
            </div>
        );
    }
}
/*
Phonebook.propTypes = {
    name: propTypes.string.isRequired
};
*/