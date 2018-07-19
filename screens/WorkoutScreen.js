import React, { Component } from 'react';
import { Container, Header, Content, Button, Text, Accordion, Card, CardItem } from 'native-base';

const dataArray = [
    { title: "First Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];

export default class WorkoutScreen extends Component {
    
    render() {
        console.log(this.props.navigation.state);
        return (
            <Container>
                <Header />
                <Content>
                    {this.props.navigation.state.params.userData.Exercises
                        .map(exercise => 
                            <Card key={exercise.id}>
                                <CardItem>
                                    <Text>{exercise.Name}</Text>
                                </CardItem>
                            </Card>
                        )
                    }
                </Content>
            </Container>
        );
    }
}