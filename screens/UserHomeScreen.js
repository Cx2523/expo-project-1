import React, { Component } from 'react';
import { Container, Header, Content, Button, Text, Accordion } from 'native-base';
import { Alert } from 'react-native';
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
        workouts: state.Workouts,
        exercises: state.Exercises
    };
 };  

class UserHomeScreen extends Component {

    startWorkout = () => {  
        const { navigate } = this.props.navigation;
        if (!this.props.exercises || this.props.exercises.length === 0) {
            Alert.alert('Add some exercises first.');
            navigate('MyExercises');
        } else {
            this.props.addWorkoutToDb({
                name: `Workout_${new Date().toDateString()}`,
                description: '',
                startTime: new Date().toISOString(),
                endTime: null
            }).then(res => {navigate('Workout')});
        }
        
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
                    <Button 
                        success rounded 
                        style={styles.centeredButton}
                        onPress={() => this.startWorkout()}
                    >
                        <Text>START WORKOUT!</Text>
                    </Button>
                    <PieChartExample />
                    <Button 
                        primary rounded
                        style={styles.centeredButton}
                        onPress={() => this.goToMyExercises()}
                    >
                        <Text>My Exercises</Text>
                    </Button>
                    <Button 
                        primary rounded 
                        style={styles.centeredButton}
                        onPress={() => this.goToMyWorkouts()}
                    >
                        <Text>My Workouts</Text>
                    </Button>
                </Content>
            </Container>
        );
    }  
}

export default connect(mapStateToProps, mapDispatchToProps)(UserHomeScreen);