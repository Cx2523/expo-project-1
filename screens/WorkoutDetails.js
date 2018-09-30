import React, { Component } from 'react';
import {
    Container,
    Header,
    Content,
    Text,
    Card,
    CardItem,
    Icon,
    Button,
    View,
    H2,
    List,
    ListItem
} from 'native-base';
import { connect } from 'react-redux';
import { deleteExerciseFromDb, updateWorkoutInDb } from '../Redux/Actions/actionsIndex';
import { styles } from '../styles/stylesheet';

const getExerciseName = (exerciseId, exercises) => exercises.find(exercise => exercise.id === exerciseId).Name;

const exerciseIsInWorkout = (exerciseId, sets) => {
    if (sets) {
        return sets.some(set => {
            return set.ExerciseId === exerciseId;
        });
    } else {
        return false;
    }
}

const mapStateToProps = (state, ownProps) => {
    const currentWorkout = state.Workouts.find(workout => {
        console.log('----------get current workout--------------', workout.id, ownProps.navigation.state.params.id);
        return workout.id === ownProps.navigation.state.params.id;
    });
    console.log('-------------- current workout --------------------' , currentWorkout);
    return {
        currentWorkout: currentWorkout,
        exercises: state.Exercises
    }
};

const WorkoutDetails = (props) => {
    return (
        <Container>
            <Content>
                <Text>Work out details</Text>
                {props.exercises.map(exercise => {
                    if (exerciseIsInWorkout(exercise.id, props.currentWorkout.Sets)) {
                        return <View key={exercise.id}>
                                    <ListItem itemHeader>
                                        <Text>{exercise.Name}</Text>
                                    </ListItem>
                                    {
                                        props.currentWorkout.Sets.map(set => {
                                            if (set.ExerciseId === exercise.id) {
                                                return <ListItem key={set.id}>
                                                            <Text>Reps: {set.Reps} </Text>
                                                            <Text>Time: {set.Time} </Text>
                                                            <Text>Weight: {set.Weight} </Text>
                                                        </ListItem>
                                                
                                            }
                                        })
                                    }
                                </View>

                    }
                })}

            </Content>
        </Container>
    );

}

export default connect(mapStateToProps)(WorkoutDetails);