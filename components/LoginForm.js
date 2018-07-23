import * as React from 'react';
import { TextInput, Button, View, AppRegistry, Alert } from 'react-native';
import { styles } from '../styles/stylesheet';
import { UserHomeScreen } from '../screens/UserHomeScreen';
import { connect } from 'react-redux';
import { initializeState } from '../Redux/Actions/actionsIndex';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'username',
            password: 'password'
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
            this.props.navigate('UserHome');
            
        })
        .catch(error => {
            console.log(error);
        });
    }

    render() {
        return (
            <View style={styles.container} contentContainerStyle={styles.contentContainer}>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, width:'90%'}}
                    onChangeText={(text) => this.setState({ username: text})}
                    value={this.state.username}
                />
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '90%'}}
                    onChangeText={(text) => this.setState({password: text})}
                    value={this.state.password}
                />

                <Button
                    onPress={this.handleSubmit}
                    title="LOGIN"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
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