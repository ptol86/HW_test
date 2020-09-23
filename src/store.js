import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import clientsReducer from "./components/redux/clients/clients.reducer";
import authorReducer  from "./components/redux/author/author.reducer";
import meowFactsReducer  from "./components/redux/meowFacts/meowFacts.reducer";
import thunk from "redux-thunk";

const reducer = combineReducers({
    clients: clientsReducer,
    authorData: authorReducer,
    meowFacts: meowFactsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer,
    composeEnhancers(applyMiddleware(thunk)),
)

export default store;

