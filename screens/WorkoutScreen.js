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
import { deleteExerciseFromDb } from '../Redux/Actions/actionsIndex';

const mapStateToProps = (state) => {
    return {
        exercises: state.Exercises
    }
};

const mapDispatchToProps = dispatch => {
    return { 
        deleteExerciseFromDb: (id) => dispatch(deleteExerciseFromDb(id))
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

    goToExerciseEdit = () => {
        this.props.navigation.navigate('MyExercises');
    }

    deleteExercise = (exerciseId) => {
        this.props.deleteExerciseFromDb(exerciseId);
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
                    {this.state.editMode ?
                        <Button block bordered success onPress={this.goToExerciseEdit}>
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
                            <Card key={exercise.id}>
                                <CardItem style={{justifyContent: 'space-between'}}>
                                    <Text style={{fontSize: 28}}>{exercise.Name}</Text>
                                    {this.state.editMode ?
                                        <View style={{width: '40%', justifyContent: 'space-around', flexDirection: 'row'}}>
                                            <Icon type="FontAwesome" name="pencil" style={{
                                                fontSize: 30,
                                                color:"#ffe600"
                                            }} />
                                            <Icon 
                                                type="FontAwesome" name="remove"
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
                </Content>
            </Container>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutScreen);