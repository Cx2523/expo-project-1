import { ADD_EXERCISE, INITIALIZE_STATE } from '../constants';

export const addExercise = (exercise) => {
    return {
        type: ADD_EXERCISE,
        payload: exercise
    }
};

export const initializeState = (data) => {
    return {
        type: INITIALIZE_STATE,
        payload: data
    };
}