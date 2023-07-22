import { Component } from "react";
import propTypes from "prop-types";

export class Filter extends Component {
    render() {
        return (
            <label>
                <h3>Find contacts by name</h3>
                <input type="text" onChange={this.props.changeFunction} />
            </label>
        )
    }
} 

Filter.propTypes = {
    changeFunction: propTypes.func.isRequired
};