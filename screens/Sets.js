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
    H2
} from 'native-base';
import { View } from 'react-native';
import { connect } from 'react-redux';
import SetTracking from './SetTracking';
import { styles } from '../styles/stylesheet';

const mapStateToProps = (state, ownProps) => {
    let currentExercise = state.Exercises.find(ex => ex.id === ownProps.navigation.state.params.id);
    let currentWorkout = state.Workouts[state.Workouts.length - 1];
    let currentSets = currentWorkout.Sets.filter(set => set.ExerciseId === currentExercise.id);
    return {
        currentExercise: currentExercise,
        currentWorkout: currentWorkout, 
        currentSets: currentSets
    }
};

const mapDispatchToProps = dispatch => {
    return {};
}

const Sets = (props) => {
    const { navigate } = props.navigation;
        return ( 
            <Container>
                <Header>
                    <H2>{props.currentExercise.Name}</H2>
                    <Text>{props.currentWorkout.Name}</Text>
                </Header>   

                <View>  
                    <Button style={styles.centeredButton} bordered success onPress={() => props.navigation.navigate('SetTracking', {id: props.currentExercise.id })}>
                        {/* <Icon type="FontAwesome" name="plus" /> */}
                        <Text style={styles.buttonText}>
                            Start a New Set
                        </Text>
                    </Button>  
                    {props.currentSets.map((set, i) => 
                        <Card key={set.id}>
                        <CardItem
                            style={{justifyContent: 'space-between'}}>
                            <Text style={{fontSize: 28}}>{`Set # ${i + 1}`}</Text>
                            {props.currentExercise.Time ? 
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
                    )}
                    <Button style={styles.centeredButton} bordered danger onPress={() => navigate('Workout')}>
                        <Text style={styles.buttonText}>END {props.currentExercise.Name}</Text>
                    </Button>
                </View>
            </Container>    
        );   
}

export default connect(mapStateToProps)(Sets);