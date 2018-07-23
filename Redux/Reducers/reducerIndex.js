import { ADD_EXERCISE, INITIALIZE_STATE } from '../constants';

const initialState = {};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE_STATE:
            return Object.assign({}, action.payload);
    
        case ADD_EXERCISE:
            return { ...state, Exercises: [...state.Exercises, action.payload ]}
    
        default: 
            return state;
    }
};

export default rootReducer;