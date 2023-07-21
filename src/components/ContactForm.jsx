import { Component } from "react";
//import propTypes from "prop-types";
import { nanoid } from 'nanoid';

export class Phonebook extends Component {
    render() {
        return(
            <form className="phonebook" onSubmit={this.props.submitFunction}>
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
        );
    }
}
/*
Phonebook.propTypes = {
    name: propTypes.string.isRequired
};
*/