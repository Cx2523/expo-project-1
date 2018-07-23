import React, { Component } from 'react';
import { Textarea, Container, Button, Content, Form, Item, Input, Picker,  Text, H3 } from 'native-base';
import { connect } from 'react-redux';
import { addExercise } from '../Redux/Actions/actionsIndex';

const mapDispatchToProps = (dispatch) => {
    return {
        addExercise: (exercise) => dispatch(addExercise(exercise))
    }
}

class ExerciseEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            Description: '',
            Category: '',
            Metrics: {
                Weight: false,
                Time: false,
                Reps: false
            }
        }
    }

    metricCheckBoxUpdate = (metric) => {
        this.setState(prevState => {
            let newMetrics = Object.assign({}, prevState.Metrics);
            newMetrics[metric] = !prevState.Metrics[metric]
            return { Metrics: newMetrics }
        });
    }

    categorySelectorChange = (value) => {
        this.setState({ Category: value });
    }

    handleSubmit = () => {
        this.props.addExercise(this.state); 
        this.props.navigate('Workout');
    }

    render() {
        return (
            <Container style={{ marginLeft: '5%', marginRight: '5%' }}>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Input
                                placeholder="Name"
                                style={{
                                    marginTop: '2%',
                                    marginBottom: '2%' 
                                }}
                                onChangeText={(text) => this.setState({ Name: text })} 
                                value={this.state.Name}
                            />  
                        </Item> 
                        <Textarea rowSpan={3} bordered placeholder="Description" />
                        <H3>Category</H3>
                        <Item picker style={{ marginTop: '2%', marginBottom: '2%' }}>
                            <Picker
                                mode="dropdown"
                                placeholder="Category"
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                selectedValue={this.state.Category}
                                onValueChange={this.categorySelectorChange}
                            >
                                <Picker.Item label="Strength / Anaerobic" value="Anaerobic" />
                                <Picker.Item label="Endurance / Aerobic" value="Aerobic" />
                                <Picker.Item label="Flexibility" value="Flexibility" />
                                <Picker.Item label="Balance" value="Balance" />
                            </Picker>
                        </Item>
                        <H3>Metrics</H3>
                        <Button block bordered={!this.state.Metrics.Reps} onPress={() => this.metricCheckBoxUpdate('Reps')} style={{ marginTop: '2%', marginBottom: '2%' }}>
                            <Text>Reps</Text>
                        </Button>
                        <Button block bordered={!this.state.Metrics.Time} onPress={() => this.metricCheckBoxUpdate('Time')} style={{ marginTop: '2%', marginBottom: '2%' }}>
                            <Text>Time</Text>
                        </Button>
                        <Button block bordered={!this.state.Metrics.Weight} onPress={() => this.metricCheckBoxUpdate('Weight')} style={{ marginTop: '2%', marginBottom: '2%' }}>
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

export default connect(null, mapDispatchToProps)(ExerciseEdit); 