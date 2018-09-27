import React, { Component } from 'react';
import { Textarea, Container, Button, Content, Form, Item, Input, Picker,  Text, H3 } from 'native-base';
import { connect } from 'react-redux';
import { addExerciseToDb, updateExerciseInDb } from '../Redux/Actions/actionsIndex';

const mapDispatchToProps = (dispatch) => {
    return {
        addExerciseToDb: (exercise) => dispatch(addExerciseToDb(exercise)),
        updateExerciseInDb: (exercise) => dispatch(updateExerciseInDb(exercise))
    }
}

const mapStateToProps = (state) => { 
    return {
        exercises: state.Exercises
    }
}

class ExerciseEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            name: '',
            description: '',
            category: 'Anaerobic',
            weight: false,
            time: false,
            reps: false
        }
    }

    componentWillMount() {
        if (this.props.id) {
            const exerciseToEdit = this.props.exercises.find(exercise => exercise.id === this.props.id);

            this.setState(Object.assign({}, {
                id: exerciseToEdit.id,
                name: exerciseToEdit.Name,
                description: exerciseToEdit.Description,
                category: exerciseToEdit.Category,
                weight: exerciseToEdit.Weight,
                time: exerciseToEdit.Time, 
                reps: exerciseToEdit.Reps 
            }));
        }
    }

    metricCheckBoxUpdate = (metric) => {
        this.setState(prevState => {  
            return {
                [metric] : !prevState[metric]
            }
        }); 
    }

    categorySelectorChange = (value) => {
        this.setState({ category: value });
    }

    handleSubmit = () => {
        if (this.state.id) { 
            this.props.updateExerciseInDb(this.state);
        } else {
            this.props.addExerciseToDb(this.state); 
        }
        this.props.navigate('MyExercises');

    }

    render() {
        return (
            <Container style={{ marginLeft: '5%', marginRight: '5%' }}>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Input
                                placeholder="name"
                                style={{
                                    marginTop: '2%',
                                    marginBottom: '2%' 
                                }}
                                onChangeText={(text) => this.setState({ name: text })} 
                                value={this.state.name}
                            />  
                        </Item> 
                        <Textarea rowSpan={3} bordered placeholder="description" />
                        <H3>Category</H3>
                        <Item picker style={{ marginTop: '2%', marginBottom: '2%' }}>
                            <Picker
                                mode="dropdown"
                                placeholder="Category"
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                selectedValue={this.state.category}
                                onValueChange={this.categorySelectorChange}
                            >
                                <Picker.Item label="Strength / Anaerobic" value="Anaerobic" />
                                <Picker.Item label="Endurance / Aerobic" value="Aerobic" />
                                <Picker.Item label="Flexibility" value="Flexibility" />
                                <Picker.Item label="Balance" value="Balance" />
                            </Picker>
                        </Item>
                        <H3>Metrics</H3>
                        <Button block bordered={!this.state.reps} onPress={() => this.metricCheckBoxUpdate('reps')} style={{ marginTop: '2%', marginBottom: '2%' }}>
                            <Text>Reps</Text>
                        </Button>
                        <Button block bordered={!this.state.time} onPress={() => this.metricCheckBoxUpdate('time')} style={{ marginTop: '2%', marginBottom: '2%' }}>
                            <Text>Time</Text>
                        </Button>
                        <Button block bordered={!this.state.weight} onPress={() => this.metricCheckBoxUpdate('weight')} style={{ marginTop: '2%', marginBottom: '2%' }}>
                            <Text>Weight</Text>
                        </Button>
                    </Form>
                    <Button
                    onPress={this.handleSubmit}
                    success
                    block
                >
                    <Text>Save</Text>
                </Button>
                </Content>
            </Container>

        );
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseEdit); 