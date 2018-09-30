import React from 'react';
import {
  View
} from 'react-native';
import {
  Content, H1, H3, Container, Button, Text, Header
} from 'native-base';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import Login from '../components/LoginForm';

import { styles } from '../styles/stylesheet';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {  
    header: null,
  };

  goToSignUp = () => {
    this.props.navigation.actions.navigate('SignUp');
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
        <View style={styles.homeScreen}>
          <Container style={styles.homeScreenContainer}>
            <View style={{flex:1, justifyContent:'center'}}>
              <H1 style={[styles.marginAuto, styles.homePageHeader]}>WORKOUT APP</H1>
              <Login navigate={this.props.navigation.navigate}/>
            </View>
            <View style={{flex:1, justifyContent:'center', marginTop:'120%'}}>
              <Text style={styles.marginAuto}>Don't have an account?</Text>
              <Button
                  rounded light
                  style={styles.centeredButton}
                  onPress={() => navigate('SignUp')}
              >
                  <Text>Sign Up For Free</Text>  
              </Button>
              </View>
          </Container>
        </View>
    );
  }
}

export default HomeScreen;