import { Component } from "react";
import propTypes from "prop-types";
import FilterStyles from "./PhonebookCSS/Filter.module.css";

export class Filter extends Component {
    render() {
        return (
            <label htmlFor="searchInput">
                <h3 className={FilterStyles.searchInputHeader}>Find contacts by name</h3>
                <input type="text" id="searchInput"  className={FilterStyles.searchInput} onChange={this.props.changeFunction} />
            </label>
        )
    }
} 

Filter.propTypes = {
    changeFunction: propTypes.func.isRequired
};