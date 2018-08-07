import React, { Component} from 'react';
import { View, H1, Icon, Card, Text } from 'native-base';
import { TextInput } from 'react-native';

class StopWatch extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: 0,
            timer: null,
            timerIsRunning: false
        };
        this.tick = this.tick.bind(this);
        this.startTime = this.startTime.bind(this);
        this.stopTime = this.stopTime.bind(this);
        this.pauseTime = this.pauseTime.bind(this);
        this.msToTime = this.msToTime.bind(this);
    }

    startTime() { 
            this.setState({
                timer: setInterval(this.tick,100),
                timerIsRunning: true
            });
    }

    tick(){
        this.setState(prevState => { 
            return {
                value:  prevState.value + 100
            }
        });
    }

    stopTime(){
        clearInterval(this.state.timer);
        this.setState({
            timer: null,
            value: 0,
            timerIsRunning: false
        });
    }

    pauseTime() {
        clearInterval(this.state.timer);
        this.setState({
            timerIsRunning: false,
            timer: null
        });  
    }

    msToTime(duration) {
        let milliseconds = parseInt((duration%1000)/100)
        let seconds = parseInt((duration/1000)%60)
        let minutes = parseInt((duration/(1000*60))%60)
        let hours = parseInt((duration/(1000*60*60))%24);
    
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
    
        return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
    }

    render(){
        return (  
            <Card>
                <H1 
                    style={{
                        textAlign: 'center',
                        marginTop: '3%'
                    }}
                >Time</H1>
                <View flexDirection={'row'} justifyContent={'space-around'}>
                    <Text style={{fontSize: 50, textAlign: 'center'}}>{this.msToTime(this.state.value)}</Text>
                </View>
                <View flexDirection={'row'} justifyContent={'space-around'}>
                {this.state.timerIsRunning ? 
                    <Icon 
                        onPress={this.pauseTime}
                        name="pause"
                        style={{
                            fontSize: 60,
                            color:"green"
                        }}
                    />
                    :
                    <Icon 
                        onPress={this.startTime}
                        name="play"
                        style={{
                            fontSize: 60,
                            color:"green"
                        }}
                    />
                }
                    
                    <Icon 
                        onPress={this.stopTime}
                        name="md-square"
                        style={{
                            fontSize: 60,
                            color:"red"
                        }}
                    />
                </View>
            </Card>
        ); 
    }
    
};

export default StopWatch;