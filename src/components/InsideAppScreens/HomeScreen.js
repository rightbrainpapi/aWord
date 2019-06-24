import React from 'react';
import {Dimensions, SafeAreaView, ScrollView, TouchableHighlight, Image, StyleSheet, Button, View, Text } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json


const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
//////////// 3 Main App Components /////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////





///////////////////////////////
///////////////////////////////
//////// Home Component ///////
///////////////////////////////
///////////////////////////////
class HomeScreen extends React.Component {
  state ={



    screenHeight: height,
    screenWidth: width,
    artposts: this.props.savedartpost,
    user_name: "Update your Name",
    user_bio: "Update your Bio",


  }

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

  onContentSizeChange = (contentWidth, contentHeight) => {
    this.setState({ screenHeight: contentHeight });
  };




  render() {
    const scrollEnabled = this.state.screenHeight > 0;
    return (


      
      <SafeAreaView style={styles.mainContainer}>
        {/* <View>
                    <Image style={styles.backgroundImage} source={require('../assets/images/background.png')}/>
                </View> */}


        <View style={styles.profileSubHeaderContainer}>

            {/* <View style={styles.column1}>
              <Text>User Image</Text> 
            </View> */}
            <View style={styles.column1}>
              <Image
              style={{width: 95, height: 95,  borderRadius: 95/ 2, borderWidth: 8, borderColor: 'rgba(36, 32, 9, 1)'}}
              source={require('../assets/images/hair1.png')}
              />
            </View>



            <View style={styles.column2}>

              <View style={styles.column2_child1}>
                <Text >{this.state.user_name}</Text>
                <Text>{this.state.user_bio}</Text>
              </View>
             
              {/* <Text> Edit Button</Text> */}




            <TouchableHighlight style={styles.editButton} >
                <Text>Edit</Text>
            </TouchableHighlight>
            </View>




            <View style={styles.column3}>


            <TouchableHighlight style={styles.logoutButton} >
                <Text>Logout</Text>
            </TouchableHighlight>
              {/* <Text>Logout button</Text> */}
            </View>
        </View>

        <View style={styles.userPostsSection} > 

            
     


              <ScrollView style={{
                  flex: 1, 
                  // width: 365,
                  // height: 200,
                  // width: this.state.screenWidth,
                  backgroundColor: 'tan',
                  flexDirection: 'column',
                  // flexWrap: 'wrap',
  
                }}
                contentContainerStyle={styles.scrollview}
                          scrollEnabled={scrollEnabled}
          onContentSizeChange={this.onContentSizeChange}
                >


       <View style={styles.userPostsSubSection}>






{/* Begins: This Section Should be Duplicated */}
                <View style={styles.userPost}>

                    <View style={styles.userPostImageContainer} >
                    <Image
                    style={styles.userPostImage}
                    source={require('../assets/images/hair2.png')}
                    />
                    </View>


                    <View style={styles.userPostInfoCard} >
                      <Text>Style </Text>
                      <Text>Duration </Text>
                      <Text>Longevity</Text>
                      <Text>Description</Text>
                    </View>

                </View>

{/* Ends: This Section Should be Duplicated */}

                {/* Begin: Remove After Testing */}


                <View style={styles.userPost}>

                <View style={styles.userPostImageContainer} >
                <Image
                style={styles.userPostImage}
                source={require('../assets/images/hair2.png')}
                />
                </View>


                <View style={styles.userPostInfoCard} >
                  <Text>Style </Text>
                  <Text>Duration </Text>
                  <Text>Longevity</Text>
                  <Text>Description</Text>
                </View>

              </View>

             <View style={styles.userPost}>

                <View style={styles.userPostImageContainer} >
                <Image
                style={styles.userPostImage}
                source={require('../assets/images/hair2.png')}
                />
                </View>


                <View style={styles.userPostInfoCard} >
                  <Text>Style </Text>
                  <Text>Duration </Text>
                  <Text>Longevity</Text>
                  <Text>Description</Text>
                </View>

              </View>


             <View style={styles.userPost}>

                <View style={styles.userPostImageContainer} >
                <Image
                style={styles.userPostImage}
                source={require('../assets/images/hair2.png')}
                />
                </View>


                <View style={styles.userPostInfoCard} >
                  <Text>Style </Text>
                  <Text>Duration </Text>
                  <Text>Longevity</Text>
                  <Text>Description</Text>
                </View>

              </View>

             <View style={styles.userPost}>

                <View style={styles.userPostImageContainer} >
                <Image
                style={styles.userPostImage}
                source={require('../assets/images/hair2.png')}
                />
                </View>


                <View style={styles.userPostInfoCard} >
                  <Text>Style </Text>
                  <Text>Duration </Text>
                  <Text>Longevity</Text>
                  <Text>Description</Text>
                </View>

              </View>
                <View style={styles.userPost}>

                <View style={styles.userPostImageContainer} >
                <Image
                style={styles.userPostImage}
                source={require('../assets/images/hair2.png')}
                />
                </View>


                <View style={styles.userPostInfoCard} >
                  <Text>Style </Text>
                  <Text>Duration </Text>
                  <Text>Longevity</Text>
                  <Text>Description</Text>
                </View>

              </View>

             <View style={styles.userPost}>

                <View style={styles.userPostImageContainer} >
                <Image
                style={styles.userPostImage}
                source={require('../assets/images/hair2.png')}
                />
                </View>


                <View style={styles.userPostInfoCard} >
                  <Text>Style </Text>
                  <Text>Duration </Text>
                  <Text>Longevity</Text>
                  <Text>Description</Text>
                </View>

              </View>


             <View style={styles.userPost}>

                <View style={styles.userPostImageContainer} >
                <Image
                style={styles.userPostImage}
                source={require('../assets/images/hair2.png')}
                />
                </View>


                <View style={styles.userPostInfoCard} >
                  <Text>Style </Text>
                  <Text>Duration </Text>
                  <Text>Longevity</Text>
                  <Text>Description</Text>
                </View>

              </View>

             <View style={styles.userPost}>

                <View style={styles.userPostImageContainer} >
                <Image
                style={styles.userPostImage}
                source={require('../assets/images/hair2.png')}
                />
                </View>


                <View style={styles.userPostInfoCard} >
                  <Text>Style </Text>
                  <Text>Duration </Text>
                  <Text>Longevity</Text>
                  <Text>Description</Text>
                </View>

              </View>

            {/* End: Remove After Testing */}







   </View>


              </ScrollView>
            
         
        </View>

      </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({
//SubHeaderContainer Styling Begins 


  mainContainer:{
     
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: '#802805', 
    // width: width,
    // width: 375, height: 100,
  },

//Begin Here: This will exist on every page
  profileSubHeaderContainer:{
    position: 'absolute',
    top: 0,
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    
    alignItems: 'center',



    //Just so that I can see
    width: 375, height: 100,backgroundColor: 'rgba(255, 255, 224, .5)',
    
  },
//End Here: This will exist on every page



  column1:{
    
    fontSize: 30,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100, height: 100, // backgroundColor: 'powderblue'
  },


  column2:{
    // flex: 1, 
    // flexDirection: 'column',

    justifyContent: 'space-evenly',
    fontSize: 30,
    width: 150, height: 80, //backgroundColor: 'green'
  },

  column2_child1:{
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: 150, 
    height: 50, 
    borderWidth: 2, 
    borderColor: 'rgba(36, 32, 9, 1)', 
    backgroundColor: 'rgba(255, 255, 224, .5)'
},

editButton: {
  alignSelf: 'center',
  alignItems: 'center',
  borderWidth: 2, 
  borderColor: 'rgba(36, 32, 9, .9)', 
  backgroundColor: 'rgba(255, 255, 224, .5)',
  borderRadius: 20,
  borderWidth: 2, 
  width: 50, 
  // padding: 3,
},








  column3:{
    fontSize: 30,
    justifyContent: 'center',
    width: 50, height: 80, //backgroundColor: 'red'
    
},


logoutButton: {
  alignSelf: 'center',
  
  alignItems: 'center',
  borderWidth: 2, 
  borderColor: 'rgba(36, 32, 9, .9)', 
  backgroundColor: 'rgba(255, 255, 224, .5)',
  borderRadius: 20,
  width: 55,
  borderWidth: 2, 
  // padding: 3,
},
//SubHeaderContainer Styling Ends 



// Begins Here: userPostsSection Styling

userPostsSection:{
  flex: 1, 
  flexDirection: 'row',
  justifyContent: 'flex-start',
  justifyContent: 'center', 
  justifyContent: 'space-evenly',
  marginTop: 10,
  top: 100,
  // width: 180,
  width: 365,

  flexWrap: 'wrap', 

  //remove the height when done.
  // height: 400,

  backgroundColor: 'red'
},




userPostsSubSection:{
  // alignItems: 'center',
  justifyContent: 'center', 
  width: 365,
  // height: 372,
  backgroundColor: 'green',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  paddingBottom: 105,
},






scrollview: {
  flexGrow: 1,
  // width: 300,
  justifyContent: 'center',
  alignItems: 'center',
  // justifyContent: 'flex-start',
  flexWrap: 'wrap',
},


// userPostsSecondSubSection:{
//   flex: 1, 
//   width: 365,
//   height: 370,
//   backgroundColor: 'tan',
//   flexDirection: 'row',
//   flexWrap: 'wrap',
  
// },

userPost:{
  // alignSelf: 'center',
  backgroundColor: 'blue',
  height: 190,
  width: 170,
  margin: 6,
},

userPostImageContainer:{
  //backgroundColor: 'yellow',
  width: 170,
  height: 120,
},

userPostImage:{
  width: 170,  
  height: 120,   
  borderWidth: 4, 
  borderColor: 'rgba(36, 32, 9, 1)'
},


userPostInfoCard:{


  // Keep This Background Color
  // backgroundColor: 'rgba(255, 255, 224, .5)',
}




});

export { HomeScreen};

// I had to export the object with a key of HomeScreen ex. {HomeScreen: Homescreen} 
// in order to export it from the index file using the following method 
// export * from './HomeScreen';