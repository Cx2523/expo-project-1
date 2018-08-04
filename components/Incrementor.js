import React, { Component} from 'react';
import { View, H1, Icon, Card } from 'native-base';
import { TextInput } from 'react-native';

class Incrementor extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: 0
        };
    }
    render(){
        return (  
            <View>
                <Card>
                    <H1 
                        style={{
                            textAlign: 'center',
                            marginTop: '3%',
                            marginBottom: '3%'
                        }}
                    >{this.props.metric}</H1>  
                    <View marginLeft={'15%'} marginRight={'15%'} flexDirection={'row'} justifyContent={'space-around'} width={'70%'} alignItems={'center'}>
                        <Icon type="FontAwesome" name="minus-circle" 
                            style={{
                                fontSize: 60,
                                color:"red"
                            }}
                            onPress={() => {
                                this.setState(prevState => {
                                    if (prevState.value - this.props.increment < 0) {
                                        return { 
                                            value: 0
                                        };
                                    } else {
                                        return { 
                                            value: prevState.value - this.props.increment
                                        };
                                    }
                                });
                            }}
                        /> 
                        <TextInput 
                            style={{
                                width:'50%',
                                marginLeft: '25%',
                                marginRight: '25%',
                                fontSize: 50, 
                                textAlign: 'center',
                            }}
                            keyboardType="numeric"
                            value={this.state.value.toString()}  
                        />
                        <Icon type="FontAwesome" name="plus-circle" 
                            style={{
                                fontSize: 60,
                                color:"green"
                            }}
                            onPress={() => {
                                this.setState(prevState => {
                                    return { 
                                        value: prevState.value + this.props.increment
                                    };
                                });
                            }}
                        />
                    </View>
                </Card>
            </View>
        ); 
    }
    
};

export default Incrementor;