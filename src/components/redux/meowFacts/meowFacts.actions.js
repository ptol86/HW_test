
import * as clientsGateway from "./meowFactsGateway";
export const MEOW_FACTS_RECIEVED = "MEOW_FACTS_RECIEVED";

export const meowFactsRecieved = (meowFacts) => {
    const action = {
        type: MEOW_FACTS_RECIEVED,
        payload: {
            meowFacts,
        },
    }
    return action;
}

export const getMeowFacts = () => {
    const thunkAction = function(dispatch) {
        clientsGateway.fetchMeowFacts()
            .then(meowFacts => 
                dispatch(meowFactsRecieved(meowFacts)))
    }
    return thunkAction;
}
