import React, { Component} from 'react';
import { View, Modal, Text } from 'react-native';

const RedirectModal = ({modalVisible}) => {
    return (  
        <View>
            <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => {Alert.alert('Modal has been closed.');}}>
          <Text>Great Job!</Text>  
          </Modal>
        </View>
    ); 
};

export default RedirectModal;