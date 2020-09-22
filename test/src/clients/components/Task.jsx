import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { format } from 'date-fns'

const Task = ({firstName, lastName, registrationDate}) => {
    let listItemClasses = classNames("list-item")
    return (
        <li className={listItemClasses}>
            
            <span className="list-item__text">{`${firstName} ${lastName}`}</span>
            <span className="list-item__text">{`Registration date ${format(registrationDate, 'MM-dd-yyyy (hh-mm a)')}`}</span>
            
        </li>
    )
    
}

// Task.propTypes = {
//     text: PropTypes.string,
//     done: PropTypes.bool,
//     onChange: PropTypes.func.isRequired,
//     id: PropTypes.string.isRequired,
//     onDelete: PropTypes.func.isRequired,
// };


export default Task;
