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
    View
} from 'native-base';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        exercises: state.Exercises
    }
};

const mapDispatchToProps = dispatch => {
    return {};
}

const Sets = (props) => {
        const exercise = props.exercises.find(ex => {
            return ex.id === 7;
        });
        return ( 
            <Container>
                <View>
                    <Header>{exercise.Name}</Header>
                    <Content>
                        <Card key={exercise.id}>
                            <Text>Set 1</Text>
                        </Card>
                    </Content>
                </View>
            </Container>    
        ); 
}

export default connect(mapStateToProps, mapDispatchToProps)(Sets);  