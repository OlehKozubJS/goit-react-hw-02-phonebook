import { Component } from "react";
import propTypes from "prop-types";

export class Filter extends Component {
    render() {
        return (
            <div data-value={this.state.value}>
                <h3>Find contacts by name</h3>
                <input type="text" value={this.props.value} onChange={this.props.changeFunction} />
            </div>
        )
    }
} 

Filter.propTypes = {
    changeFunction: propTypes.func.isRequired
};