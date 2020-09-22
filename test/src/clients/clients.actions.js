
import * as clientsGateway from "./clientsGateway";
export const CLIENTS_LIST_RECIEVED = "CLIENTS_LIST_RECIEVED";
export const MEOW_FACTS_RECIEVED = "MEOW_FACTS_RECIEVED";

export const clientsListRecieved = (clientsList) => {
    const action = {
        type: CLIENTS_LIST_RECIEVED,
        payload: {
            clientsList,
        },
    }

    return action;
}

export const meowFactsRecieved = (meowFacts) => {
    const action = {
        type: MEOW_FACTS_RECIEVED,
        payload: {
            meowFacts,
        },
    }
    return action;
}

export const getClientsList = () => {
    const thunkAction = function(dispatch) {
        clientsGateway.fetchClientsList()
            .then(clientsList => 
                dispatch(clientsListRecieved(clientsList)))
    }
    return thunkAction;
}

export const getMeowFacts = () => {
    const thunkAction = function(dispatch) {
        clientsGateway.fetchMeowFacts()
            .then(meowFacts => 
                dispatch(meowFactsRecieved(meowFacts)))
    }
    return thunkAction;
}

export const createClient = (client) => {
    const thunkAction = function(dispatch) {
        clientsGateway.createNewClient(client)
            .then(() => dispatch(getClientsList()))
    }
    return thunkAction;
}