import { ADD_EXERCISE_TO_LOCAL_DATA, INITIALIZE_STATE, DELETE_EXERCISE_FROM_LOCAL_DATA } from '../constants';

const initialState = {};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE_STATE:
            return Object.assign({}, action.payload);
    
        case ADD_EXERCISE_TO_LOCAL_DATA:
            return { ...state, Exercises: [...state.Exercises, action.payload ]}
    
        case DELETE_EXERCISE_FROM_LOCAL_DATA:
            const deleteIndex = state.Exercises.findIndex(exercise => exercise.id === action.payload);
            return {
                ...state, 
                Exercises: [
                    ...state.Exercises.slice(0, deleteIndex), 
                    ...state.Exercises.slice(deleteIndex + 1)
                ]
            }

        default: 
            return state;
    }
};

export default rootReducer;