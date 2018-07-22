import React, { Component } from 'react';
import { 
    Container, 
    Header, 
    Content, 
    Text, 
    Card, 
    CardItem,
    Icon,
    Button 
 } from 'native-base';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        exercises: state.Exercises
    }
};

class WorkoutScreen extends Component {
    constructor(props) {
        super(props);
    }

    goToExerciseEdit = () => {
        this.props.navigation.navigate('MyExercises');
    }

    render() {
        return (
            <Container>
                <Content>
                    {this.props.exercises
                        .map(exercise => 
                            <Card key={exercise.id}>
                                <CardItem>
                                    <Text>{exercise.Name}</Text>
                                </CardItem>
                            </Card>
                        )
                    }
                    <Button block bordered success onPress={this.goToExerciseEdit}>
                        <Icon type="FontAwesome" name="plus" />
                        <Text>
                            Add New
                        </Text>
                    </Button>
                </Content>
            </Container>
        ); 
    }  
}

export default connect(mapStateToProps)(WorkoutScreen);