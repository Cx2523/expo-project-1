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
import SetTracking from './SetTracking';

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
            return ex.id === props.navigation.state.params.id;
        });

        return ( 
            <Container>
                <Header>
                    <Text>{exercise.Name}</Text>
                </Header>
                <Content>
                    <Card key={exercise.id}>
                    <CardItem 
                        button
                    onPress={() => props.navigation.navigate('SetTracking', {id: exercise.id })}
                        style={{justifyContent: 'space-between'}}>
                        <Text style={{fontSize: 28}}>{exercise.Name}</Text>
                        {exercise.Time ? 
                                <Icon 
                                    type="FontAwesome" 
                                    name="clock-o" 
                                    style={{
                                        fontSize: 30,
                                        color:"#666666"
                                    }}
                                    
                                />
                            : null
                        }
                    </CardItem>
                    </Card>
                </Content>
            </Container>    
        );   
}

export default connect(mapStateToProps)(Sets);  