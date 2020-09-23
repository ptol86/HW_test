import  {AUTHOR_DATA_RECIEVED} from './author.actions';

const initialState = {}

const authorReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case AUTHOR_DATA_RECIEVED: {
                return action.payload.authorData;
        }
        default: 
            return state;
    }
}


export default authorReducer;


