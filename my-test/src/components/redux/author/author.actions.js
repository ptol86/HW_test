import { fetchAuthorData } from "./authorGateway";

export const AUTHOR_DATA_RECIEVED = "AUTHOR_DATA_RECIEVED";

export const authorDataRecieved = (authorData) => {
    const action = {
        type: AUTHOR_DATA_RECIEVED,
        payload: {
            authorData,
        },
    }

    return action;
}

export const getAuthorData = () => {
    const thunkAction = function(dispatch) {
        fetchAuthorData()
            .then(authorData => 
                dispatch(authorDataRecieved(authorData)))
    }
    return thunkAction;
}



