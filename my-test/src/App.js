import React from "react";
import {BrowserRouter, Route, Switch, NavLink} from "react-router-dom";
import Author from "./components/author/Author";
import ClientsList from "./components/clientsList/ClientsList";
import CreateNewClient from "./components/createForm/CreateNewClient";
import Container from '@material-ui/core/Container';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import { Provider } from "react-redux";
import  store  from "./store";

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(to right, rgb(22, 34, 42) 0%, rgb(58, 96, 115) 51%, rgb(22, 34, 42) 100%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(218, 220, 224)',
    height: 48,
    width: "70%",
    marginBottom: ".5rem",
    padding: '0 30px',
    '&:hover': {
      opacity: ".9",
    }
    
  },
});

function App() {
  const classes = useStyles();
  const deleteUnderlining = {
    width: "100%",
    textDecoration: "none",
    color: "rgba(255, 255, 255, 1)"
  };
  const containerStyles = {   
      width: "100vw",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      flexDirection: "column"
  };
  const navigation = {
    width: "100%",
    paddingTop: "30px",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  }
  return (
    <Provider store={store}>
      <Container maxWidth="sm" style={containerStyles}>
        <BrowserRouter> 
          <List style={navigation}>
            <Button className={classes.root} ><NavLink style={deleteUnderlining} activeStyle={{fontWeight: "bold", color: "rgba(185, 172, 172, 1)"}} to="/clients-list">Clients List</NavLink></Button>
            <Button className={classes.root} ><NavLink style={deleteUnderlining} activeStyle={{fontWeight: "bold", color: "rgba(185, 172, 172, 1)" }} to="/create-new-client">Create new client</NavLink></Button>
            <Button className={classes.root} ><NavLink style={deleteUnderlining} activeStyle={{fontWeight: "bold", color: "rgba(185, 172, 172, 1)" }} to="/author">Author</NavLink></Button>
          </List>
          <Switch>
            <Route exact path="/clients-list" component={ClientsList}></Route>
            <Route path="/author" component={Author} />
            <Route path="/create-new-client" component={CreateNewClient}/>
          </Switch>
        </BrowserRouter>
      </Container>
    </Provider>
  );
}

export default App;
