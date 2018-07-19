import React, { Component } from '../../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import { Container, Header, Content, Button, Text, Accordion } from 'native-base';

const dataArray = [
    { title: "First Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];

export default class WorkoutScreen extends Component {
    render() {
        return (
            <Container>
                <Header />
                <Content>
                    <Text>WorkoutScreen</Text>
                </Content>
            </Container>
        );
    }
}