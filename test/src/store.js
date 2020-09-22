import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import clientsReducer from "./clients/clients.reducer";
import thunk from "redux-thunk";

const reducer = combineReducers({
    clients: clientsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer,
    composeEnhancers(applyMiddleware(thunk)),
)

export default store;

