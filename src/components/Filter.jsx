import { Component } from "react";
import propTypes from "prop-types";

export class Filter extends Component {
    state = {
        filter: ""
    }

    render() {
        return (
            <div>
                <h3>Find contacts by name</h3>
                <input type="text" value={this.props.value} onChange={this.props.changeFunction} />
            </div>
        )
    }
} 

Filter.propTypes = {
    changeFunction: propTypes.func.isRequired
};