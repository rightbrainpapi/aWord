import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json


import {HomeScreen, CameraScreen, aWordScreen} from './InsideAppScreens'


///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
////////// 3 Main Navigation Stacks ///////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////



// const Home = createStackNavigator(
//   {
//     Home: HomeScreen,
//     // Profile: ExampleScreen,
//   }, {
//     defaultNavigationOptions: {
//       headerTintColor: '#fff',
      
//       //Styles the Header
//       headerStyle: {
//         backgroundColor: 'rgba(255, 214, 172, .3)',
//         height: 70,
//         // marginBottom: 100,
//       //         style: {
//       //   backgroundColor: 'blue',
//       // },
//       },
//     },
//     navigationOptions: {
//       tabBarLabel: 'Home!',
      
//     },
//   }
// );

// const Camera = createStackNavigator(
//   {
//     Camera: CameraScreen,
//     // Camera: ExampleScreen,
//   }, {
//     defaultNavigationOptions: {
//       headerTintColor: '#fff',

//       //Styles the Header
//       headerStyle: {
//         backgroundColor: 'rgba(255, 214, 172, .3)',
//         height: 70,
//         // marginBottom: 100,
//       //         style: {
//       //   backgroundColor: 'blue',
//       // },
//       },
//     },
//     navigationOptions: {
//       title: 'You',
//       tabBarLabel: 'Camera!',
//     },
//   }
// );

const aWord = createStackNavigator(
  {
    aWord: aWordScreen,
    // Profile: ExampleScreen,
  }, {
    defaultNavigationOptions: {
      headerTintColor: '#fff',

      //Styles the Header
      headerStyle: {
        backgroundColor: '#0B3761',
        height: 70,
        // marginBottom: 100,
      //         style: {
      //   backgroundColor: 'blue',
      // },
      },
    },
    navigationOptions: {
      title: 'You',
      tabBarLabel: 'aWord!',
    },
  }
);




///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
/////////// 3 Main Navigation Tabs ////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////



// Maybe I can write a terinary statement here to check if the person is signed in.
//if they are signed in it will return the Home, Camera and aWord Screens. 
// If they are not signed in it will return the Landing Login and signup screens 

// const Tabs = createBottomTabNavigator({ Home, Camera, aWord }, 
//    {
//   tabBarOptions: {
//     activeTintColor: 'rgba(36, 32, 9, .9)',
    
//     labelStyle: {
//       fontSize: 20,
//       fontWeight: 'bold',
//     },
//     style: {
//       backgroundColor: 'rgba(255, 214, 172, .9)',
//       // backgroundColor: 'rgba(255, 214, 172, .3)',
//     },
//   }
// }

const Tabs = createBottomTabNavigator({ aWord }, 
  {
 tabBarOptions: {
   activeTintColor: 'rgba(36, 32, 9, .9)',
   
   labelStyle: {
     fontSize: 20,
     fontWeight: 'bold',
     color: 'white',
   },
   style: {
     backgroundColor: '#0B3761',
     // backgroundColor: 'rgba(255, 214, 172, .3)',
   },
 }
}
  );


///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
//////// Tabs included in a Container /////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

const AppContainer = createAppContainer(Tabs);




///////////////////////////////////////////////
//////////// Exporting Everything /////////////
///////////////////////////////////////////////
class InsideApp extends React.Component {
  render() {
    return <AppContainer />;
  }
}




export default  InsideApp; 