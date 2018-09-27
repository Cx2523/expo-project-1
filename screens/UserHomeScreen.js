import React, { Component } from 'react';
import { Container, Header, Content, Button, Text, Accordion } from 'native-base';
import { addWorkoutToDb } from '../Redux/Actions/actionsIndex';
import { connect } from 'react-redux';
import PieChartExample from '../components/PieChart';
import { styles } from '../styles/stylesheet';

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
 
    goToMyExercises = () => {
        const { navigate } = this.props.navigation;
        navigate('MyExercises');
    }

    goToMyWorkouts = () => {
        const { navigate } = this.props.navigation;
        navigate('MyWorkouts');
    }

    render() {
        return (
            <Container>
                <Content>
                    <Button success style={styles.centeredButton}
                        onPress={this.startWorkout}
                    >
                        <Text>START WORKOUT!</Text>
                    </Button>
                    <PieChartExample />
                    <Button primary style={styles.centeredButton}
                        onPress={this.goToMyExercises}
                    >
                        <Text>My Exercises</Text>
                    </Button>
                    <Button primary style={styles.centeredButton}
                        onPress={this.goToMyWorkouts}
                    >
                        <Text>My Workouts</Text>
                    </Button>
                </Content>
            </Container>
        );
    }  
}

export default connect(mapStateToProps, mapDispatchToProps)(UserHomeScreen);