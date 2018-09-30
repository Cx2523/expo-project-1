import * as React from 'react';
import { TextInput, View, AppRegistry, Alert } from 'react-native';
import { Button, Form, Item, Label, Input, Text, Container, Content, Icon } from 'native-base';
import { styles } from '../styles/stylesheet';
import { UserHomeScreen } from '../screens/UserHomeScreen';
import { connect } from 'react-redux';
import { initializeState } from '../Redux/Actions/actionsIndex';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            invalidLogin: false
        };
    }

    // handleChange = name => event => {
    //     this.setState({
    //         [name]: event.target.value,
    //     });
    // };

    clearError = () => {
        if (this.state.invalidLogin){
            this.setState({invalidLogin: false});
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(JSON.stringify(this.state));
        fetch('https://fitness-tracker-1.herokuapp.com/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state),
        })
            .then(response => response.json())
            .then(responseJson => {
                console.log(responseJson);
                this.props.initializeState(responseJson);
                this.setState({
                    username: '',
                    password: ''
                });
                this.props.navigate('UserHome');
            })
            .catch(error => {
                this.setState({invalidLogin: true});
                console.log(error);
            });
    }

    render() {
        return (
            <View>
                <Form style={{justifyContent: 'center'}}>
                    <Item floatingLabel error={this.state.invalidLogin}>
                        <Label>Username</Label>
                        <Input
                            onChangeText={(text) => this.setState({ username: text.trim() })}
                            value={this.state.username}
                            onFocus={() => this.clearError()}
                        />
                        {this.state.invalidLogin ? <Icon name='close-circle' /> : null}
                    </Item>
                    <Item floatingLabel error={this.state.invalidLogin}>
                        <Label>Password</Label>
                        <Input
                            onChangeText={(text) => this.setState({ password: text.trim() })}
                            value={this.state.password}
                            onFocus={() => this.clearError()}
                        />
                        {this.state.invalidLogin ? <Icon name='close-circle' /> : null}
                    </Item>
                    {this.state.invalidLogin ? <Text style={[{color:'red'} ,styles.marginAuto]}>Invalid Username / Password</Text>: null}

                    <Button 
                        rounded primary
                        style={[styles.centeredButton, {marginTop: '10%'}]}
                        onPress={this.handleSubmit}  
                    >
                  <Text>Log In</Text>  
              </Button>
                </Form> 
            </View>   
        );
    }
}

AppRegistry.registerComponent(
    'Login',
    () => Login
);

const mapDispatchToProps = (dispatch) => {
    return {
        initializeState: data => dispatch(initializeState(data))
    };
}

export default connect(null, mapDispatchToProps)(Login);