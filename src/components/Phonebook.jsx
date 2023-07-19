import { Component } from "react";
import propTypes from "prop-types";
import { nanoid } from "nanoid";
model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"

class Phonebook extends Component {
    state = {
        contacts: [],
        name: ''
    }

    render() {
        return(
            <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
        );
    }
}