import { Component } from "react";
import propTypes from "prop-types";

export class ContactList extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.items.map(
                        item => (
                            <li key={item.id}>
                                <span>{item.name}: {item.number}</span>
                                <button data-id={item.id} onClick={this.props.clickFunction}>Delete</button>
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