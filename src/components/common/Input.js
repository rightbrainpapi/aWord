import React from 'react';
import {  StyleSheet} from 'react-native';
import {TextInput, View, Text} from 'react-native';

//Props list coming from the parent
const Input = ({label, value, onChangeText, placeholder, secureTextEntry}) => {

    return(
        <View style={styles.containerStyles}>
        <Text style={styles.labelStyles}>{label}</Text>
        <TextInput
            secureTextEntry ={secureTextEntry}
            placeholder={placeholder}
            autoCorrect={false}  
            style={styles.inputStyles}
            value={value}
            onChangeText={onChangeText}
          />
    </View>    
    );

};


const styles = StyleSheet.create({
  inputStyles: {
    color:'#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyles: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 20
  },
  containerStyles: {
    flex:1,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center'
  }

});
export {Input};