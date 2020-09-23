import React, {useEffect, useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PetsIcon from '@material-ui/icons/Pets';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import * as ClientsActions from "../redux/clients/clients.actions";
import * as MeowActions from "../redux/meowFacts/meowFacts.actions";
import { meowFactsSelector } from "../redux/meowFacts/meowFacts.selectors";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    '& > *': {
      margin: theme.spacing(1),
      width: '30ch',
    },
  },
}));

const CreateNewClient = ({createClient, getMeowFacts, meowFacts}) => { 
  const classes = useStyles();
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    cardNumber: '',
    loyaltyProgram: 'Unavailable',
    registrationDate: Date.now(),
  });
  const [stateError, setUpdateStateError] = useState({
    errorFirstName: '',
    errorLastName: '',
    errorGender: '',
    errorCreditCardNumber: '',
  })
  const clearInputs = () => setUser({
    firstName: '',
    lastName: '',
    gender: '',
    cardNumber: '',
    loyaltyProgram: 'Unavailable',
    registrationDate: ''
  });
  const regName = new RegExp(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/);
  const regGender = new RegExp(/^male$|^female$/);
  const visaPattern = new RegExp(/^(?:4[0-9]{12}(?:[0-9]{3})?)$/);
  const mastPattern = new RegExp(/^(?:5[1-5][0-9]{14})$/);
  const amexPattern = new RegExp(/^(?:3[47][0-9]{13})$/);
  const discPattern = new RegExp(/^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/); 

  const isName = value => regName.test(value) ? null : 'Wrong entry, enter first name';
  const isLastName = value => regName.test(value) ? null : 'Wrong entry, enter last name';
  const isGender = value => regGender.test(value) ? null : 'Wrong entry, enter gender(male/female)';
  const isCreditCard = value => {
    const isVisa = visaPattern.test(value);
    const isMast = mastPattern.test(value);
    const isAmex = amexPattern.test(value);
    const isDisc = discPattern.test(value);
    return (isVisa || isMast || isAmex || isDisc) 
      ? null
      : 'Wrong entry, enter credit card number'
  };
  const validatorsByField = {
    firstName: [isName],
    lastName: [isLastName],
    gender: [isGender],
    cardNumber: [isCreditCard],
  }
  const validate = (fieldName, value) => {
    const validators = validatorsByField[fieldName];
    return validators
      .map(validator => validator(value))
      .filter(errorText => errorText)
      .join(',');
  }
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const onNameChange = e => {
    e.preventDefault();
    const errorText = validate(e.target.name, e.target.value)
    handleChange(e);
    setUpdateStateError({
      ...stateError,
      errorFirstName: errorText, 
    });
  }
  const onLastNameChange = e => {
    e.preventDefault();
    const errorText = validate(e.target.name, e.target.value)
    handleChange(e);
    setUpdateStateError({
      ...stateError,
      errorLastName: errorText, 
    });
  }
  const onGenderChange = e => {
    e.preventDefault();
    const errorText = validate(e.target.name, e.target.value)
    handleChange(e);
    setUpdateStateError({
      ...stateError,
      errorGender: errorText, 
    });
  }
  const onCreditCardNumberChange = e => {
    e.preventDefault();
    const errorText = validate(e.target.name, e.target.value)
    handleChange(e);
    setUpdateStateError({
      ...stateError,
      errorCreditCardNumber: errorText, 
    });
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    createClient(user);
    clearInputs();
  }
  useEffect(()=> getMeowFacts(), [getMeowFacts]);
  return (
      <form onSubmit={handleSubmit} className={classes.root} autoComplete="off">
          <TextField 
            id="standard-basic"
            label="Enter first name"
            name="firstName"
            value={user.firstName}
            onChange={onNameChange}
            maxLength="20"
            required
          />
          {stateError.errorFirstName !== "" && <Typography variant="inherit" color="textSecondary" style={{color: "red", textAlign: "start"}}>{stateError.errorFirstName}</Typography>}
          <TextField 
            id="standard-basic"
            label="Enter last name"
            name="lastName"
            value={user.lastName}
            onChange={onLastNameChange}
            maxLength="20"
            required
          />
          {stateError.errorLastName !== "" && <Typography variant="inherit" color="textSecondary" style={{color: "red", textAlign: "start"}}>{stateError.errorLastName}</Typography>}
          <TextField 
            id="standard-basic"
            label="Choose the gender"
            name="gender"
            value={user.gender}
            onChange={onGenderChange}
            maxLength="20"
            required
          />
          {stateError.errorGender !== "" && <Typography variant="inherit" color="textSecondary" style={{color: "red", textAlign: "start"}}>{stateError.errorGender}</Typography>}
          {user.loyaltyProgram === "Plastic card" && <TextField 
              id="standard-basic"
              label="Enter card number"
              name="cardNumber"
              value={user.cardNumber}
              onChange={onCreditCardNumberChange}
              maxLength="20"
              autoComplete="off"
              required
            />
          }
          {user.loyaltyProgram === "Plastic card" && stateError.errorCreditCardNumber !== "" && <Typography variant="inherit" color="textSecondary" style={{color: "red", textAlign: "start"}}>{stateError.errorCreditCardNumber}</Typography>}
          <InputLabel style={{textAlign: "start", paddingTop: "20px", width: "94%"}}> Select loyalty program </InputLabel>
          <Select
            name="loyaltyProgram"
            value={user.loyaltyProgram}
            onChange={handleChange}
            required
            style={{textAlign: "start", color: "rgba(0, 0, 0, 0.54)", width: "94%"}}
          >
            <MenuItem value="Unavailable" disableGutters>Unavailable</MenuItem>
            <MenuItem value="Plastic card" disableGutters>Plastic card</MenuItem>
            <MenuItem value="Mobile application" disableGutters>Mobile application</MenuItem>
          </Select>
          
        <div style={{
              "display": "flex",
              "justifyContent": "space-between",
              }}
        >
          <Button variant="outlined" 
            className="btn-container_btn" 
            onClick={clearInputs}
            style={{color: "rgba(0, 0, 0, 0.54)"}}
          >
            Cancel
          </Button>
          <Button variant="outlined" 
            className="btn-container_btn" 
            type="submit"
            style={{color: "rgba(0, 0, 0, 0.54)"}}
          >
            Create
          </Button>
        </div>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}} >
          <PetsIcon style={{paddingBottom: "20px", color: "rgba(0, 0, 0, 0.54)"}}/>
          <Typography variant="h6" align="center" color="textSecondary">
            {`Funny fact: ${meowFacts}`}
          </Typography>
        </div>
      </form>)
};
const mapState = state => {
  return {
    meowFacts: meowFactsSelector(state),
  }
}
const mapDispatch = {
  createClient: ClientsActions.createClient,
  getMeowFacts: MeowActions.getMeowFacts,
}

export default connect(mapState, mapDispatch)(CreateNewClient);
