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
    H1
} from 'native-base';
import { connect } from 'react-redux';
import { deleteExerciseFromDb, updateWorkoutInDb } from '../Redux/Actions/actionsIndex';
import { styles } from '../styles/stylesheet';

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
        // this.state = {
        //     editMode: false
        // };
    }

    goToExerciseEdit = (id = null) => {
        this.props.navigation.navigate('ExerciseEditor', { id: id });
    }

    deleteExercise = (exerciseId) => {
        this.props.deleteExerciseFromDb(exerciseId);
    }

    render() {
        return (
            <Container>
                <Content>
                    <H1 style={{margin: '2%'}}>My Exercises:</H1>
                    <Button 
                        success rounded 
                        style={styles.centeredButton}
                        onPress={() => this.goToExerciseEdit()}
                    >
                        <Text>
                            Add New
                        </Text>
                        <Icon type="FontAwesome" name="plus" />
                    </Button>
 
                    {this.props.exercises ? this.props.exercises
                        .map(exercise =>
                            <Card key={exercise.id}>
                                <CardItem button onPress={() => this.goToExerciseEdit(exercise.id)} style={{ justifyContent: 'space-between' }}>
                                    <Text style={{ fontSize: 28 }}>{exercise.Name}</Text>
                                    <View style={{ width: '40%', justifyContent: 'space-around', flexDirection: 'row' }}>
                                        <Icon
                                            type="FontAwesome"
                                            name="pencil"
                                            style={{
                                                fontSize: 30,
                                                color: "#ffe600"
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
                                    </View>
                                </CardItem>
                            </Card>
                        )
                        : <Text>...add some exercises to get started.</Text>
                    }
                </Content>
            </Container> 
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutScreen);