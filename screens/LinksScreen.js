import React from 'react';
import { ScrollView, StyleSheet, Linking } from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Icon, Left, Body, Right, Button } from 'native-base';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };
    
  goToHyperlink = (url) => {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log('Don\'t know how to open URI: ' + this.props.url);
      }
    });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Container>
          <Content>
            <ListItem icon onPress={() => this.goToHyperlink('https://www.linkedin.com/in/chris-caldwell-webdev/')}>
              <Left>
                <Button style={{ backgroundColor: "#0077B5" }}>
                  <Icon 
                    type="FontAwesome" 
                    active 
                    name="linkedin"
                    style={{
                      color:'white',
                      backgroundColor:'#0077B5'
                  }}
                    />
                </Button>  
              </Left>
              <Body>
                <Text>LinkedIn</Text>
              </Body>
            </ListItem>
            <ListItem icon onPress={() => this.goToHyperlink('https://github.com/Cx2523')}>     
              <Left>
                <Button style={{ backgroundColor: "black" }}>
                  <Icon 
                    type="FontAwesome" 
                    active 
                    name="github"
                    style={{
                      color:'white',
                      backgroundColor:'black'   
                  }}
                    />
                </Button>
              </Left>
              <Body>
                <Text>Git Hub</Text>
              </Body>
            </ListItem>
            <ListItem icon onPress={() => {this.goToHyperlink('mailto:chriscaldwell.webdeveloper@gmail.com')}}>
              <Left> 
                <Button style={{ backgroundColor: "#80BB40" }}>
                <Icon 
                    type="Zocial" 
                    active
                    name="email"
                    style={{
                      color:'white',
                      backgroundColor:'#80BB40' 
                  }}
                    />
                </Button>
              </Left>
              <Body>
                <Text>Email</Text>
              </Body>
            </ListItem>
          </Content>
        </Container>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
