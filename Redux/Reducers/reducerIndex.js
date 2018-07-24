import { ADD_EXERCISE_TO_LOCAL_DATA, INITIALIZE_STATE, DELETE_EXERCISE_FROM_LOCAL_DATA, UPDATE_EXERCISE_IN_LOCAL_DATA } from '../constants';

const initialState = {};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE_STATE:
            return Object.assign({}, action.payload);
    
        case ADD_EXERCISE_TO_LOCAL_DATA:
            return { ...state, Exercises: [...state.Exercises, action.payload ]}
    
        case UPDATE_EXERCISE_IN_LOCAL_DATA:
            const updateIndex = state.Exercises.findIndex(exercise => exercise.id === action.payload.id);
            return {
                ...state, 
                Exercises: [
                    ...state.Exercises.slice(0, updateIndex),
                    action.payload, 
                    ...state.Exercises.slice(updateIndex + 1)
                ]
            } 

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