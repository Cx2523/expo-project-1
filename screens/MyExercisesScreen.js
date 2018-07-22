import React, { Component } from 'react';
import { Container, Header, Content, Button, Text, Accordion } from 'native-base';
import ExerciseEdit from '../components/ExerciseEdit';

class MyExercisesScreen extends Component {
    render() {
        
        return (
            <Container>
                <ExerciseEdit />
            </Container>
        );
    }
}

export default MyExercisesScreen;