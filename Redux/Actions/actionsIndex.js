import { 
    ADD_EXERCISE_TO_LOCAL_DATA, 
    DELETE_EXERCISE_FROM_LOCAL_DATA, 
    INITIALIZE_STATE, 
    UPDATE_EXERCISE_IN_LOCAL_DATA,
    ADD_WORKOUT_TO_LOCAL_DATA,
    UPDATE_WORKOUT_IN_LOCAL_DATA,
    ADD_SET_TO_LOCAL_DATA,
    USER_LOGOUT
 } from '../constants';

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

export const addWorkoutToLocalData = (workout) => {
    return {
        type: ADD_WORKOUT_TO_LOCAL_DATA,
        payload: workout
    };
}

export const addSetToLocalData = (set) => {
    return {
        type: ADD_SET_TO_LOCAL_DATA,
        payload: set
    };
}

export const updateWorkoutInLocalData = (workout) => {
    return {
        type: UPDATE_WORKOUT_IN_LOCAL_DATA,
        payload: workout
    };
}

export const userLogoutLocal = () => {
    return {
        type: USER_LOGOUT,
        payload: null
    }
}

export const userLogoutDb = () => {
    return (dispatch) => {
        return fetch('https://fitness-tracker-1.herokuapp.com/exercise')
            .then(response => response.json())
            .then(responseJson => { 
                dispatch(userLogoutLocal(responseJson));
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

export const addWorkoutToDb = (workout) => {
    return (dispatch, getState) => {
        workout.UserId = getState().id;
        workout.Sets = [];
        return fetch('https://fitness-tracker-1.herokuapp.com/workout', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(workout),
            })
            .then(response => response.json())
            .then(responseJson => { 
                console.log('Workout response', responseJson);
                dispatch(addWorkoutToLocalData(responseJson));
            })
            .catch(error => {
                console.log(error);
            });
        }
    
}

export const updateWorkoutInDb = (workout) => {  
    return (dispatch, getState) => {
        workout.UserId = getState().id;
        return fetch(`https://fitness-tracker-1.herokuapp.com/workout/${workout.id}`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(workout),
            })
            .then(response => response.json())
            .then(responseJson => { 
                console.log('---------------UPDATE RESPONSE--------------------------', responseJson)
                dispatch(updateWorkoutInLocalData(responseJson[1][0]));
            })
            .catch(error => {
                console.log(error); 
            });
        }
}

export const addSetToDb = (set) => {
    return (dispatch, getState) => {
        console.log('set', set);
        set.WorkoutId = getState().Workouts[getState().Workouts.length - 1].id;
        return fetch('https://fitness-tracker-1.herokuapp.com/set', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(set),
            })
            .then(response => response.json())
            .then(responseJson => { 
                dispatch(addSetToLocalData(responseJson));
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
                console.log('update response', responseJson[1][0])
                dispatch(updateExerciseInLocalData(responseJson[1][0]));
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

