import { Component } from "react";
//import propTypes from "prop-types";
//import { nanoid } from 'nanoid/async';
/*
async function createUser() {
    user.id = await nanoid();
}
*/
export class Phonebook extends Component {
    state = {
        contacts: [],
        name: ''
    }

    render() {
        return(
            <div>
                <h2>Name</h2>
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                <button>Add contact</button>
            </div>
        );
    }
}