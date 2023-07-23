import propTypes from "prop-types";
import AlertStyles from "./PhonebookCSS/Alert.module.css";

export const Alert = ({isInContacts, name}) => {
    return (
        <div className={ isInContacts ? AlertStyles.alert : AlertStyles.hidden}>{name} is already in contacts!</div>
    );
}

Alert.propTypes = {
    name: propTypes.string.isRequired
}

