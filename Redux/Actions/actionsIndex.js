import { ADD_EXERCISE_TO_LOCAL_DATA, DELETE_EXERCISE_FROM_LOCAL_DATA, INITIALIZE_STATE, UPDATE_EXERCISE_IN_LOCAL_DATA } from '../constants';

export const addExerciseToLocalData = (exercise) => {
    return {
        type: ADD_EXERCISE_TO_LOCAL_DATA,
        payload: exercise
    };
};

export const deleteExerciseFromLocalData = (id) => {
    return {
        type: DELETE_EXERCISE_FROM_LOCAL_DATA,
        payload: id
    };
}

export const updateExerciseInLocalData = (exercise) => {
    return {
        type: UPDATE_EXERCISE_IN_LOCAL_DATA,
        payload: exercise
    };
};
// getState allows you to access piece of the redux store that are not being passed in on exercise.
// userID for example
export const addExerciseToDb = (exercise) => {  
    return (dispatch, getState) => {
        exercise.UserId = getState().id;
        return fetch('https://fitness-tracker-1.herokuapp.com/exercise', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(exercise),
            })
            .then(response => response.json())
            .then(responseJson => { 
                dispatch(addExerciseToLocalData(responseJson));
            })
            .catch(error => {
                console.log(error);
            });
        }
}

export const updateExerciseInDb = (exercise) => {  
    return (dispatch, getState) => {
        exercise.UserId = getState().id;
        return fetch(`https://fitness-tracker-1.herokuapp.com/exercise/${exercise.id}`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(exercise),
            })
            .then(response => response.json())
            .then(responseJson => { 
                dispatch(updateExerciseInLocalData(responseJson));
            })
            .catch(error => {
                console.log(error);
            });
        }
}
export const deleteExerciseFromDb = (id) => {
    return (dispatch) => {
        return fetch(`https://fitness-tracker-1.herokuapp.com/exercise/${id}`, {
            method: 'DELETE'
        })
        .then(response => {
            dispatch(deleteExerciseFromLocalData(id));
        })
        .catch(error => {
            console.log(error);
        });
    }
}



export const initializeState = (data) => {
    return {
        type: INITIALIZE_STATE,
        payload: data
    }; 
}