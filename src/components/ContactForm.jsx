import { Component } from "react";
import propTypes from "prop-types";
import style from "./PhonebookCSS/Pnonebook.module.css";

export class ContactForm extends Component {
    render() {
        return(
            <form className="phonebook" onSubmit={this.props.submitFunction} value={this.state}>
                <label className={style.nameLabel} htmlFor="name">
                    <h3>Name</h3>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </label>
                <label className={style.numberLabel} htmlFor="number">
                    <h3>Number</h3>
                    <input
                        type="tel"
                        id="number"
                        name="number"
                        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </label>
                <button className={style.submitButton} type="submit">Add contact</button>
            </form>
        );
    }
}

ContactForm.propTypes = {
    submitFunction: propTypes.func.isRequired
};
