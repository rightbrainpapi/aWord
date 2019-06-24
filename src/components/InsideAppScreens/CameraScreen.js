import React from 'react';
import {Dimensions, SafeAreaView, ScrollView, TouchableHighlight, Image, StyleSheet, Button, View, Text } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json

//////////////////////////////
//////////////////////////////
///////Camera Component///////
//////////////////////////////
//////////////////////////////


// import React from 'react'
// import { View, Text, Image, Button } from 'react-native'
import ImagePicker from 'react-native-image-picker'



class CameraScreen extends React.Component {
  state = {
    photo: null,
  }
  
  handleChoosePhoto = () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        this.setState({ photo: response });
      }
    });
  };

  static navigationOptions = {
    title: 'aWord',
    headerTitleStyle: {
      color: 'rgba(36, 32, 9, .9)',
      fontSize: 45,
      fontWeight: 'bold',
      justifyContent: 'center',
      height: 70,
      
    },
  };
 
  render() {
    const { photo } = this.state;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {photo && (
        <Image
          source={{ uri: photo.uri }}
          style={{ width: 300, height: 300 }}
        />
      )}
      <Button title="Choose Photo" onPress={this.handleChoosePhoto} />
    </View>
    );
  }
}


//I had to export the object with a key of CameraScreen in order to
// export it from the index file using the following method 
// export * from './CameraScreen';

export { CameraScreen};

// I had to export the object with a key of CameraScreen ex. {CameraScreen: Camerascreen} 
// in order to export it from the index file using the following method 
// export * from './CameraScreen';