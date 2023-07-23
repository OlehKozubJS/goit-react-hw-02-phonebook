import propTypes from "prop-types";
import AlertStyles from "./PhonebookCSS/Alert.module.css";

export const Alert = (name) => {
    return (
        <div className={AlertStyles.alert}>{name} is already in contacts!</div>
    );
}

Alert.propTypes = {
    name: propTypes.string.isRequired
}

