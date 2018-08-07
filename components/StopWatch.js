import React, { Component} from 'react';
import { View, H1, Icon, Card, Text } from 'native-base';
import { TextInput } from 'react-native';

class StopWatch extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: 0,
            timer: null
        };
        this.tick = this.tick.bind(this);
        this.startTime = this.startTime.bind(this);
        this.stopTime = this.stopTime.bind(this);

    }

    startTime() {
        this.setState({timer: setInterval(this.tick,100)});
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
            value: 0
        });
    }

    render(){
        return (  
            <Card>
                <View flexDirection={'row'} justifyContent={'space-around'}>
                    <Text style={{fontSize: 50}}>{this.state.value}</Text>
                    <Icon 
                        onPress={this.startTime}
                        name="play"
                        style={{
                            fontSize: 60,
                            color:"green"
                        }}
                    />
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