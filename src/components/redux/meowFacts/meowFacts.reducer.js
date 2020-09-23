import { MEOW_FACTS_RECIEVED } from "./meowFacts.actions"

const initialState = {
  meowFacts: {}
}

const meowFactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case MEOW_FACTS_RECIEVED:
      return {
        ...state,
        meowFacts: action.payload.meowFacts,
      }
    default:
      return state;
  }
}

export default meowFactsReducer;