import React from 'react';
import { Text, View, StyleSheet} from 'react-native';


const Header =  (props) => {
   
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>
                {props.headerText}
            </Text>  
        </View>
    );
};




const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 25,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }

  });

  export {Header};