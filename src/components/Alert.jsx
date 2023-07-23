import propTypes from "prop-types";
import AlertStyles from "./PhonebookCSS/Alert.module.css";

export const Alert = ({isInContacts, name}) => {
    return (
        <div className={ isInContacts ? AlertStyles.alert : AlertStyles.hidden} onClick={this.props.clickFunction}>{name} is already in contacts!</div>
    );
}

Alert.propTypes = {
    isInContacts: propTypes.bool.isRequired,
    clickFunction: propTypes.func.isRequired,
    name: propTypes.string.isRequired
}

