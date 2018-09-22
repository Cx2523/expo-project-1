import React from 'react';
import {
  View
} from 'react-native';
import {
  Content, H1, H3, Container, Button, Text
} from 'native-base';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import Login from '../components/LoginForm';

import { styles } from '../styles/stylesheet';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    test: state.test
  };
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {  
    return (
        <View style={styles.homeScreen}>
          <Container style={styles.homeScreenContainer}>
            <Content>
              <H1 style={styles.marginAuto}>Workout App</H1>
              <Login navigate={this.props.navigation.navigate}/>
              <Text style={styles.marginAuto}>Don't have an account?</Text>
              <Button
                    rounded light
                    style={styles.centeredButton}
                >
                    <Text>Sign Up For Free</Text>  
                </Button>
            </Content>
          </Container>
        </View>
    );
  }
}


export default connect(mapStateToProps)(HomeScreen);