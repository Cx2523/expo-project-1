import * as React from 'react';
// import * as request from 'superagent';
import { TextInput, Button, View, AppRegistry } from 'react-native';
import { styles } from '../styles/stylesheet';
import * as request from 'superagent';

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
        // e.preventDefault();
        // request.post('/login')
        //     .set('Content-Type', 'application/json')
        //     .send(this.state)
        //     .then(res => {
        //         this.props.history.push({ 
        //             pathname: "/dashboard",
        //             state: { userdata: JSON.stringify(res.body) }
        //         });
        //     });
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
               
                {/* <Button variant='contained' color='primary' type='submit'>Submit</Button> */}
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

export default Login;