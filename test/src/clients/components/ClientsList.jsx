import React from "react";
import Task from "./Task";


const TasksList = ({clients}) => {
    return (
        <ul className="list">
            {clients.map(client => (
                <Task 
                key={client.id} 
                {...client} 
                />
            ))}
        </ul>
    );
};
  
  
  export default TasksList;