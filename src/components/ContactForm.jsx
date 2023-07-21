import { Component } from "react";
import propTypes from "prop-types";
//import { nanoid } from 'nanoid';

export class ContactForm extends Component {
    /*state = {
        id: "",
        name: "",
        number: ""
    }

    addNewContact = event => {
        event.preventDefault();

        const {name, number} = event.currentTarget.elements;
        const idData = nanoid();
        const nameData = name.value;
        const numberData = number.value;
        
        this.setState({ id: idData, name: nameData, number: numberData });

        event.currentTarget.reset();
    }
    
    reset = () => {
        this.setState({ id: "", name: "", number: "" });
    };*/

    render() {
        return(
            <form className="phonebook" onSubmit={this.props.submitFunction} value={this.state}>
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

ContactForm.propTypes = {
    submitFunction: propTypes.func.isRequired
};
