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

const MyWorkouts = (props) => {

    const { navigate } = props.navigation;

    return (
        <Container>
            <Content>
                {props.workouts
                    .map(workout =>
                        <Card key={workout.id}>
                            <CardItem button onPress={() => navigate('WorkoutDetails', {id: workout.id})}>
                                <Text style={{ fontSize: 28 }}>{workout.Name}</Text>
                            </CardItem>
                        </Card>
                    )
                }
            </Content>
        </Container>
    );
    
}

export default connect(mapStateToProps)(MyWorkouts);