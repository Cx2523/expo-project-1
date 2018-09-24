import React from 'react';
import {
  View
} from 'react-native';
import {
  Content, H1, H3, Container, Button, Text, Header
} from 'native-base';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import SignUp from '../components/SignUpForm';

import { styles } from '../styles/stylesheet';

class SignUpScreen extends React.Component {  
  static navigationOptions = {
    header: null,
  };

  render() {  
    return (
        <View style={styles.homeScreen}> 
          <Container>
            <Header>
                <Text>
                    Sign Up For Free
                </Text>
            </Header>
            <Content>
              <SignUp navigate={this.props.navigation.navigate}/>
            </Content>
          </Container>
        </View>
    );
  }
}

export default SignUpScreen;