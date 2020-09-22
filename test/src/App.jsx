import React from "react";
import MainList from "./clients/components/MainList";
import { Provider } from "react-redux";
import  store  from "./store";

const App = () => {
    return (
        <Provider store={store}>
            <MainList />
        </Provider>
    )
    
}

export default App;