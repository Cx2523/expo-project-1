import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'native-base';
import { styles } from '../styles/stylesheet';
import { connect } from 'react-redux';
import { userLogoutDb } from '../Redux/Actions/actionsIndex';

const mapDispatchToProps = (dispatch) => {
  return {
    userLogout: () => dispatch(userLogoutDb())
  }
}

class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json',
  };

  handleLogout = () => {
    this.props.userLogout();
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <View>
        <Button
            onPress={this.handleLogout}
            warning
            style={styles.centeredButton}
        >
            <Text>Log Out</Text>
        </Button>
        <Button
            // onPress={this.handleLogout}
            danger
            style={styles.centeredButton}
        >
            <Text>Reset My Data</Text>
        </Button>
      </View>
    );
  }
}

export default connect(null, mapDispatchToProps)(SettingsScreen);
