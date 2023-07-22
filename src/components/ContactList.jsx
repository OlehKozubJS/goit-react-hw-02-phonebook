import { Component } from "react";
import propTypes from "prop-types";
import ContactListStyles from "./PhonebookCSS/ContactList.module.css";

export class ContactList extends Component {
    render() {
        return (
            <ul className={ContactListStyles.ContactList}>
                {
                    this.props.items.map(
                        item => (
                            <li key={item.id} className={ContactListStyles.ContactListItem}>
                                <span className={ContactListStyles.ContactListItemText}>{item.name}: {item.number}</span>
                                <button data-id={item.id}  className={ContactListStyles.ContactListItemButton} onClick={this.props.clickFunction}>Delete</button>
                            </li>
                        )
                    )
                }
            </ul>
        )
    }
}

ContactList.propTypes = {
    items: propTypes.arrayOf(
        propTypes.shape(
            {
                id: propTypes.string.isRequired,
                name: propTypes.string.isRequired,
                number: propTypes.string.isRequired
            }
        ).isRequired
    ).isRequired,
    clickFunction: propTypes.func.isRequired
}