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
    H1,
    Form,
    Item
} from 'native-base';
import { connect } from 'react-redux';
import Incrementor from '../components/Incrementor';
import StopWatch from '../components/StopWatch';

const mapStateToProps = (state) => {
    return {
        exercises: state.Exercises
    }
};

const mapDispatchToProps = dispatch => {
    return {};
}

const SetTracking = (props) => {
        // const exercise = props.exercises.find(ex => {
        //     return ex.id === props.navigation.state.params.id;
        // });
        return ( 
            <Container>
                <Form>
                    <H1>Exercise Set 1</H1>
                    <Incrementor metric={'Reps'} increment={5}/>
                    <Incrementor metric={'Weight'} increment={1}/>
                    <StopWatch />
                </Form>
            </Container>    
        );     
}  

export default connect(mapStateToProps)(SetTracking);  