import React, { Component } from 'react';
import { Container, Header, Content, Button, Text, Accordion } from 'native-base';

const dataArray = [
    { title: "First Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];

export default class UserHomeScreen extends Component {

    startWorkout = () => {
        const { navigate } = this.props.navigation;
        navigate('Workout', { userData: this.props.navigation.state.params.userData} );
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