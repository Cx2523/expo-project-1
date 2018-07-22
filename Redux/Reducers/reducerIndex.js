import { ADD_EXERICSE, INITIALIZE_STATE } from '../constants';

const initialState = {};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE_STATE:
            return Object.assign({}, action.payload);
    
        case ADD_EXERICSE:
            return { ...state, exercises: [...state.exercises, action.payload ]}
    
        default: 
            return state;
    }
};

export default rootReducer;