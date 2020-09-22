import React, {useState} from "react";
import { connect } from 'react-redux';
import * as ClientsActions from "../../clients.actions";
import "./popup.scss";

const Popup = ({ show, hideForm, getClientsList }) => {  
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    loyaltyProgram: '',
    registrationDate: ''
  });

  const createTask = (user, e, createClient) => {
      e.preventDefault();
      const newClient = {
          firstName: user.firstName,
          lastName: user.lastName,
          gender: user.gender,
          loyaltyProgram: user.loyaltyProgram,
          registrationDate: Date.now(),
      }
      createClient(newClient)
      setUser({
        firstName: '',
        lastName: '',
        gender: '',
        loyaltyProgram: '',
        registrationDate: ''
      })
      hideForm();
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  if (!show) { 
    return null 
  };
  return (
    <section className="popup" >
      <form 
      onSubmit={(e) => createTask(user, e, createClient)}
      className="popup-form" >
        <span className="popup-form_title">Create new client</span>
        <div className="popup-form_container">
          <input
            className="popup-form_input"
            type="text"
            name="firstName"
            placeholder="Enter first name"
            value={user.firstName}
            onChange={handleChange}
            maxLength="20"
            required
          />
          <input
            className="popup-form_input"
            type="text"
            name="lastName"
            placeholder="Enter last name"
            value={user.lastName}
            onChange={handleChange}
            maxLength="20"
            required
          />
          <input
            className="popup-form_input"
            type="text"
            name="gender"
            placeholder="Choose the gender"
            value={user.gender}
            onChange={handleChange}
            maxLength="20"
            required
          />
          <label className="popup-form_input">Select loyalty program
            <select
              className="popup-form_input"
              name="loyaltyProgram"
              value={user.loyaltyProgram}
              defaultValue="Unavailable"
              onChange={handleChange}
              required
            >
              <option value="unavailable">Unavailable</option>
              <option value="plastic card">Plastic card</option>
              <option value="mobile application">Mobile application</option>
            </select>
          </label>
        </div>
        <div className="btn-container">
          <button 
            onClick={hideForm}
            className="btn-container_btn" >
            Cancel
          </button>
          <button className="btn-container_btn" type="submit">
            Create
          </button>
        </div>
      </form>
    </section>)
  
};

const mapDispatch = {
  createClient: ClientsActions.createClient,
}

export default connect(null, mapDispatch)(Popup);
