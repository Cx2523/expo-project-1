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
    H2
} from 'native-base';
import { connect } from 'react-redux';
import { deleteExerciseFromDb, updateWorkoutInDb } from '../Redux/Actions/actionsIndex';
import { styles } from '../styles/stylesheet';

const mapStateToProps = (state, ownProps) => {
    const currentWorkout = state.Workouts.find(workout => {
        return workout.id === ownProps.navigation.state.params.id;
    });
    return {
        currentWorkout: currentWorkout
    }
};

const WorkoutDetails = (props) => {

    const WorkoutId = props.navigation.state.params.id;

    return (
        <Container>
            <Content>
                <Text>Work out details</Text>
                {props.currentWorkout.Sets
                    .map(set =>
                        <Card key={set.id}>
                            <CardItem button>
                                <Text style={{ fontSize: 18 }}>Exercise: {set.ExerciseId}</Text>
                                <Text style={{ fontSize: 18 }}>Reps: {set.Reps}</Text>
                                <Text style={{ fontSize: 18 }}>Time: {set.Time}</Text>
                                <Text style={{ fontSize: 18 }}>Weight: {set.Weight}</Text>
                            </CardItem>
                        </Card>
                    )
                }
            </Content>
        </Container>
    );
    
}

export default connect(mapStateToProps)(WorkoutDetails);