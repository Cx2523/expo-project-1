import React, { Component } from 'react';
import { Container, Header, Content, Button, Text, Accordion } from 'native-base';
import ExerciseEdit from '../components/ExerciseEdit';

const MyExercisesScreen = (props) => {
    return (
        <Container>
            <ExerciseEdit
                id={props.navigation.state.params.id}
                navigate={props.navigation.navigate} />
        </Container>
    );
}

export default MyExercisesScreen; 