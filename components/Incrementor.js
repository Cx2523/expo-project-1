import React, { Component} from 'react';
import { View, H1, Icon, Card } from 'native-base';
import { TextInput } from 'react-native';

const Incrementor = ({value, increaseMetric, decreaseMetric, metric}) => {
    return (  
        <View>
            <Card>
                <H1 
                    style={{
                        textAlign: 'center',
                        marginTop: '1%',
                        marginBottom: '1%'
                    }}
                >{metric}</H1>  
                <View marginLeft={'15%'} marginRight={'15%'} flexDirection={'row'} justifyContent={'space-around'} width={'70%'} alignItems={'center'}>
                    <Icon type="FontAwesome" name="minus-circle" 
                        style={{
                            fontSize: 60,
                            color:"red"
                        }}
                        onPress={decreaseMetric}
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
                        value={value.toString()}  
                    />  
                    <Icon type="FontAwesome" name="plus-circle" 
                        style={{
                            fontSize: 60,
                            color:"green" 
                        }}
                        onPress={increaseMetric}
                    />
                </View>
            </Card>
        </View>
    ); 
};

export default Incrementor;