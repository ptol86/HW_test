import { CLIENTS_LIST_RECIEVED, MEOW_FACTS_RECIEVED } from "./clients.actions"

const initialState = {
    clientsList: [],
    meowFacts: []
}

const clientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLIENTS_LIST_RECIEVED:
            return {
                ...state,
                clientsList: action.payload.clientsList,
            }
        case MEOW_FACTS_RECIEVED:
            return {
                ...state,
                meowFacts: action.payload.meowFacts,
            }
        default:
            return state;
    }
}

export default clientsReducer;