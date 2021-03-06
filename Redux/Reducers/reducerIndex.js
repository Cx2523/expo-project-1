import { 
    ADD_EXERCISE_TO_LOCAL_DATA, 
    INITIALIZE_STATE, 
    DELETE_EXERCISE_FROM_LOCAL_DATA, 
    UPDATE_EXERCISE_IN_LOCAL_DATA,
    ADD_WORKOUT_TO_LOCAL_DATA,
    UPDATE_WORKOUT_IN_LOCAL_DATA,
    ADD_SET_TO_LOCAL_DATA,
    USER_LOGOUT
 } from '../constants';

const initialState = {};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE_STATE:
            return Object.assign({}, action.payload);
        
        case USER_LOGOUT:
            return undefined;

        case ADD_EXERCISE_TO_LOCAL_DATA:
            return { ...state, Exercises: [...state.Exercises, action.payload ]}
    
        case UPDATE_EXERCISE_IN_LOCAL_DATA:
            let exerciseUpdateIndex = state.Exercises.findIndex(exercise => exercise.id === action.payload.id);
            return {
                ...state, 
                Exercises: [
                    ...state.Exercises.slice(0, exerciseUpdateIndex),
                    action.payload, 
                    ...state.Exercises.slice(exerciseUpdateIndex + 1)
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

        case ADD_WORKOUT_TO_LOCAL_DATA:
            action.payload.Sets = [];
            return { ...state, Workouts: [...state.Workouts, action.payload ] }

        case ADD_SET_TO_LOCAL_DATA:
            let currentWorkout = Object.assign({}, state.Workouts[state.Workouts.length - 1]);
            currentWorkout.Sets.push(action.payload);
            console.log('-------------------current workout after adding set -------------------', currentWorkout);  
            let newWorkoutList = [...state.Workouts];
            newWorkoutList.pop();
            newWorkoutList.push(currentWorkout);
            console.log('------------------new workout list------------------', newWorkoutList)
            return { ...state, Workouts: [...newWorkoutList] }  

        case UPDATE_WORKOUT_IN_LOCAL_DATA:
            let workoutUpdateIndex = state.Workouts.findIndex(workout => workout.id === action.payload.id);
            console.log('--------------update work outs state.workouts---------------------', state.Workouts);
            const newWorkouts = [...state.Workouts];
            console.log('--------------update work outs copy---------------------', newWorkouts);
            newWorkouts.pop();
            console.log('--------------update work outs copy after pop ---------------------', newWorkouts);
            newWorkouts.push(action.payload);
            console.log('--------------update work outs copy after push---------------------', newWorkouts);

            return {  
                ...state, 
                Workouts: newWorkouts
            } 

        default:
            return state;
    }
};

export default rootReducer;