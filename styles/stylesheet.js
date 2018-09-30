import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    homeScreen: {
      flex: 1,
      alignItems: 'stretch',
    },  
    homeScreenContainer:{
      padding:'5%',
      backgroundColor: '#2d7eff',
      flex: 1, 
      justifyContent: 'center',
      alignItems: 'stretch',
      flexDirection:'column'
    },
    marginAuto:{ 
      marginLeft: 'auto',
      marginRight: 'auto'  
    },
    homePageHeader:{
      color: 'white',
      marginTop: '70%',  
      fontSize: 30,
      fontWeight: 'bold',
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