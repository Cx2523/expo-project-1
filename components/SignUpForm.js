import * as React from 'react';
import { TextInput, View, AppRegistry, Alert } from 'react-native';
import { Button, Form, Item, Label, Input, Text, Container, Content } from 'native-base';
import { styles } from '../styles/stylesheet';
import { UserHomeScreen } from '../screens/UserHomeScreen';
import { connect } from 'react-redux';
import { initializeState } from '../Redux/Actions/actionsIndex';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        Alert.alert('Submit');
        console.log(JSON.stringify(this.state));
        fetch('https://fitness-tracker-1.herokuapp.com/register', {
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
                this.props.navigate('UserHome');
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <Form style={{justifyContent: 'center'}}>
                <Item floatingLabel>
                    <Label>Username</Label>
                    <Input
                        onChangeText={(text) => this.setState({ username: text })}
                        value={this.state.username}
                    />
                </Item>
                <Item floatingLabel>
                    <Label>Password</Label>
                    <Input
                        onChangeText={(text) => this.setState({ password: text })}
                        value={this.state.password}
                    />
                </Item>
                <Button
                    onPress={this.handleSubmit}
                    primary
                    style={styles.centeredButton}
                >
                    <Text>Sign Up</Text>
                </Button>
            </Form>    
        );
    }
}

AppRegistry.registerComponent(
    'SignUp',
    () => SignUp
);

const mapDispatchToProps = (dispatch) => {
    return {
        initializeState: data => dispatch(initializeState(data))
    };
}

export default connect(null, mapDispatchToProps)(SignUp);