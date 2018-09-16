import React, { Component } from 'react';
import { Container, Header, Content, Button, Text, Accordion } from 'native-base';
import { addWorkoutToDb } from '../Redux/Actions/actionsIndex';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
    return {
        addWorkoutToDb: (workout) => dispatch(addWorkoutToDb(workout))
    };
}

const mapStateToProps = (state) => { 
    return {
        workouts: state.Workouts
    };
 };

class UserHomeScreen extends Component {

    startWorkout = () => {
        const { navigate } = this.props.navigation;
        this.props.addWorkoutToDb({
            name: `Workout_${new Date().toDateString()}`,
            description: 'my first workout',
            startTime: new Date().toISOString(),
            endTime: null
        });
        navigate('Workout');
    }
 
    goToAddExercise = () => {
        const { navigate } = this.props.navigation;
        navigate('MyExercises', {id: null});
    }

    render() {
        
        return (
            <Container>
                <Content>
                    <Button block primary onPress={this.goToAddExercise}>
                        <Text>Add an Exercise</Text>
                    </Button>
                    <Button block success onPress={this.startWorkout}>
                        <Text>START WORKOUT!</Text>
                    </Button>
                </Content>
            </Container>
        );
    }  
}

export default connect(mapStateToProps, mapDispatchToProps)(UserHomeScreen);