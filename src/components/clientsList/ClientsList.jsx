import React, { useEffect } from "react";
import Client from "./Client";
import List from '@material-ui/core/List';
import { connect } from 'react-redux';
import { clientsListSelector } from "../redux/clients/clients.selectors";
import * as ClientsActions from "../redux/clients/clients.actions";

const ClientsList = ({clients, getClientsList}) => {
    useEffect(()=>{
      getClientsList()
    }, [getClientsList])
    return (
        <List style={{color: "rgba(0, 0, 0, 0.54)"}}>
            {clients.map(client => (
                <Client 
                key={client.id} 
                {...client} 
                />
            ))}
        </List>
    );
};
  
const mapState = state => {
  return {
      clients: clientsListSelector(state),
  }
}

const mapDispatch = {
  getClientsList: ClientsActions.getClientsList,
}

export default connect(mapState, mapDispatch)(ClientsList); 
