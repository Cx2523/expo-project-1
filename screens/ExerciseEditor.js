import React, { Component } from 'react';
import { Container } from 'native-base';
import ExerciseEdit from '../components/ExerciseEdit';

const ExerciseEditor = (props) => {
    return (
        <Container>
            <ExerciseEdit
                id={props.navigation.state.params.id}
                navigate={props.navigation.navigate} />
        </Container>
    );
}

export default ExerciseEditor; 