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

class SetTracking extends Component {
    constructor(props){
        super(props);
        this.state = {
            Reps: 0, 
            Weight: 0,
            Time: 0,
            timestamp: ''
        }
        this.increaseMetric = this.increaseMetric.bind(this);
        this.decreaseMetric = this.decreaseMetric.bind(this);
        this.getStopWatchTime = this.getStopWatchTime.bind(this);
        this.saveSetData = this.saveSetData.bind(this);
    }

    increaseMetric(metric, increment){
        this.setState(prevState => {
            return {
                    [metric]: prevState[metric] + increment           
            };       
        });
    }

    decreaseMetric(metric, increment){
        this.setState(prevState => {
            if (prevState[metric] - increment < 0) {
                return {
                        [metric]: 0        
                };   
            } else {
                return {
                    [metric]: prevState[metric] - increment   
                };   
            }
        });
    }

    getStopWatchTime(timeValue){
        this.setState({Time: timeValue});
    }

    saveSetData(){
        console.log(this.state);
    }

    render(){
        return ( 
            <Container>
                <Form>
                    <H1>ExerciseName Set 1</H1>
                    <Incrementor 
                        value={this.state.Reps} 
                        increaseMetric={() => this.increaseMetric('Reps', 1)}
                        decreaseMetric={() => this.decreaseMetric('Reps', 1)}
                        metric={'Reps'}
                    />
                    <Incrementor 
                        value={this.state.Weight} 
                        increaseMetric={() => this.increaseMetric('Weight', 5)}
                        decreaseMetric={() => this.decreaseMetric('Weight', 5)}
                        metric={'Weight'}
                    />
                    
                    <StopWatch sendStopWatchTime={this.getStopWatchTime}/>
                    <Button block primary onPress={this.saveSetData}><Text>Save Set</Text></Button>
                </Form>
            </Container>    
        );    
    }
}

export default connect(mapStateToProps)(SetTracking);  