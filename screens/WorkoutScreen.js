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
    View
} from 'native-base';
import { connect } from 'react-redux';
import { deleteExerciseFromDb, updateWorkoutInDb } from '../Redux/Actions/actionsIndex';

const mapStateToProps = (state) => {
    return {
        exercises: state.Exercises,
        workouts: state.Workouts
    }
};

const mapDispatchToProps = dispatch => {
    return { 
        deleteExerciseFromDb: (id) => dispatch(deleteExerciseFromDb(id)),
        updateWorkoutInDb: (workout) => dispatch(updateWorkoutInDb(workout))
    }
}

class WorkoutScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false
        };
    }

    toggleEditMode = () => {
        this.setState(prevState => {
            return {
                editMode: !prevState.editMode
            }
        });
    }

    goToExerciseEdit = (id = null) => {
        this.props.navigation.navigate('MyExercises', {id: id});
    }

    deleteExercise = (exerciseId) => {
        this.props.deleteExerciseFromDb(exerciseId);
    }

    goToSets = (id) => {
        this.props.navigation.navigate('MySets', {id: id});
    }

    endWorkout = () => {
        var currentWorkout = Object.assign({}, this.props.workouts[this.props.workouts.length - 1]);
        console.log('end workout', currentWorkout);
        currentWorkout.endTime = new Date(); 
        this.props.updateWorkoutInDb(currentWorkout);
        this.props.navigation.navigate('UserHome');
    }

    render() {
        return (   
            <Container>
                <Icon type="FontAwesome" name="gear" 
                    style={{
                        color: "#ff6600",
                        fontSize: 34
                    }}
                    onPress={ this.toggleEditMode }
                />
                <Content>
                    {/* <H2><Text>{this.props.workouts[this.props.workouts.length - 1]}</Text></H2> */}
                    {this.state.editMode ?
                        <Button block bordered success onPress={() => this.goToExerciseEdit()}>
                            <Icon type="FontAwesome" name="plus" />
                            <Text>
                                Add New
                            </Text>
                        </Button>
                        :
                        null 
                    }

                    {this.props.exercises
                        .map(exercise =>
                            <Card  key={exercise.id}>
                                <CardItem button onPress={() => this.goToSets(exercise.id)} style={{justifyContent: 'space-between'}}>
                                    <Text style={{fontSize: 28}}>{exercise.Name}</Text>
                                    {this.state.editMode ?
                                        <View style={{width: '40%', justifyContent: 'space-around', flexDirection: 'row'}}>
                                            <Icon 
                                                type="FontAwesome" 
                                                name="pencil" 
                                                style={{
                                                    fontSize: 30,
                                                    color:"#ffe600"
                                                }}
                                                onPress={() => this.goToExerciseEdit(exercise.id)}
                                            />
                                            <Icon 
                                                type="FontAwesome" 
                                                name="remove"
                                                style={{
                                                    color: '#ff001a',
                                                    fontSize: 30
                                                }}
                                                onPress={() => this.deleteExercise(exercise.id)}
                                            />
                                        </View> :
                                        null
                                    }
                                </CardItem>
                            </Card>
                        )
                    }
                    <Button block danger onPress={this.endWorkout}>
                        <Text>END WORKOUT</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutScreen);