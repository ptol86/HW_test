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
    width: "35ch",
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
    loyaltyProgram: 'Unavailable',
    registrationDate: Date.now(),
  });
  const clearInputs = () => setUser({
    firstName: '',
    lastName: '',
    gender: '',
    loyaltyProgram: '',
    registrationDate: ''
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    createClient(user);
    clearInputs();
  }
  
  useEffect(()=> getMeowFacts(), []);

  return (
      <form onSubmit={handleSubmit} className={classes.root}>
          <TextField 
            id="standard-basic"
            label="Enter first name"
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
            maxLength="20"
            required
          />
          <TextField 
            id="standard-basic"
            label="Enter last name"
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
            maxLength="20"
            required
          />
          <TextField 
            id="standard-basic"
            label="Choose the gender"
            name="gender"
            value={user.gender}
            onChange={handleChange}
            maxLength="20"
            required
          />
          <InputLabel style={{textAlign: "start"}}> Select loyalty program </InputLabel>
          <Select
            name="loyaltyProgram"
            value={user.loyaltyProgram}
            onChange={handleChange}
            required
            style={{textAlign: "start", color: "rgba(0, 0, 0, 0.54)"}}
          >
            <MenuItem value="Unavailable">Unavailable</MenuItem>
            <MenuItem value="Plastic card">Plastic card</MenuItem>
            <MenuItem value="Mobile application">Mobile application</MenuItem>
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
