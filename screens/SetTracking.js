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
import { addSetToDb } from '../Redux/Actions/actionsIndex';
import RedirectModal from '../components/RedirectModal';

const mapStateToProps = (state) => {
    return {
        exercises: state.Exercises
    }  
};

const mapDispatchToProps = dispatch => {
    return {
        addSetToDb: set => dispatch(addSetToDb(set))
    };
} 

class SetTracking extends Component {
    constructor(props){
        super(props);
        this.state = {
            reps: 0, 
            weight: 0,
            time: 0,
            ExerciseId: props.navigation.state.params.id
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
        this.setState({time: timeValue});
    }

    saveSetData(){
        console.log(this.state);
        this.props.addSetToDb(this.state);
        this.render(() => <RedirectModal modalVisible={true} />)
    }

    render(){
        return ( 
            <Container>
                <Form>
                    <H1>ExerciseName Set 1</H1>
                    <Incrementor 
                        value={this.state.reps} 
                        increaseMetric={() => this.increaseMetric('reps', 1)}
                        decreaseMetric={() => this.decreaseMetric('reps', 1)}
                        metric={'Reps'}
                    />
                    <Incrementor 
                        value={this.state.weight} 
                        increaseMetric={() => this.increaseMetric('weight', 5)}
                        decreaseMetric={() => this.decreaseMetric('weight', 5)}
                        metric={'Weight'}
                    />
                    
                    <StopWatch sendStopWatchTime={this.getStopWatchTime}/>
                    <Button block primary onPress={this.saveSetData}><Text>Save Set</Text></Button>
                </Form>
            </Container>    
        );    
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SetTracking);  