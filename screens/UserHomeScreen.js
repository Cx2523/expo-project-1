import React, { Component } from 'react';
import { Container, Header, Content, Button, Text, Accordion } from 'native-base';

export default class UserHomeScreen extends Component {

    startWorkout = () => {
        const { navigate } = this.props.navigation;
        navigate('Workout');
    }
 
    render() {
        
        return (
            <Container>
                <Header />
                <Content>
                    <Button block success onPress={this.startWorkout}>
                        <Text>START WORKOUT!</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}