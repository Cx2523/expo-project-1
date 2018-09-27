import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    homeScreen: {
      flex: 1,
    },
    homeScreenContainer:{
      padding:'10%',
      backgroundColor: '#2d7eff',
      flex: 1, 
      // height: screenHeight,
      justifyContent: 'center'
    },
    marginAuto:{
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    centeredButton:{
      width: '80%', 
      justifyContent: 'center',
      alignItems: 'stretch',
      marginTop: '5%',
      marginLeft: 'auto',
      marginRight:'auto',
      marginBottom: '5%'
    },
    buttonText: {
      fontSize: 18,
      alignSelf: 'stretch',
      padding:0,
      margin:0 
    }
});    