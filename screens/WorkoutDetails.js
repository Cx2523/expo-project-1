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

const mapStateToProps = (state) => {
    return {
        workouts: state.Workouts
    }
};

const WorkoutDetails = (props) => {

    const { navigate } = props.navigation;

    return (
        <Container>
            <Content>
                <Text>Work out details</Text>
            </Content>
        </Container>
    );
    
}

export default connect(mapStateToProps)(WorkoutDetails);