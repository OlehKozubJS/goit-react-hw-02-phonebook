import { Component } from "react";
import propTypes from "prop-types";

export class Filter extends Component {
    state = {
        inputValue: "",
    };

    render() {
        return (
            <div>
                <h3>Find contacts by name</h3>
                <input type="text" value={this.state.inputValue} onChange={this.props.changeFunction} />
            </div>
        )
    }
} 

Filter.propTypes = {
    changeFunction: propTypes.func.isRequired
};