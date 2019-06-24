import React from 'react';
import {Dimensions, SafeAreaView, ScrollView, TouchableHighlight, Image, StyleSheet, Button, View, Text, TextInput } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json

/////////////////////////////////////
/////////////////////////////////////
///////aWord Screen Component///////
/////////////////////////////////////
/////////////////////////////////////


import axios from 'axios'
import { FlatList, ActivityIndicator } from 'react-native';
// import { FlatList } from 'react-native-gesture-handler';
// import aWord_Posts from './src/aWord_Posts'

class aWordScreen extends React.Component {
  constructor () {
    super()
    this.state = {
      artposts: [],
      page: 0,

      query: '',
      // foundQuery: [],
      loading: false
    }
  }





  static navigationOptions = {
    title: 'aWord!',
    headerTitleStyle: {
      color: 'white',
      fontSize: 45,
      fontWeight: 'bold',
      justifyContent: 'center',
      height: 70,
      
    },
  };

  ///////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////
  ////////////////////////////AXIOS CALL/////////////////////////////
  ///////////To Get Images in Database to World_Container////////////
  ///////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////
  
  componentWillMount () {
    // e.preventDefault()
    this.axiosDataCall();

  }

axiosDataCall = async () =>{
  this.setState({ loading:true});
    axios.get('http://localhost:3001/api/artposts')
      .then(response => {
        let postentry = response.data
        this.setState(state=>({
          artposts: [...state.artposts, ...postentry], loading:false }));
      })
      // console.log(this.state.artposts)
      .catch( //<--this part of the axios is dealing with the error object.
        error => {
            console.log('Error fetching and parsing data', error);
        }
    );
  
  };

  handleEnd =() =>{
    this.setState(state=> ({page: state.page + 1}), () => this.axiosDataCall() );
  };

  handleInputChange = () => {
    // this.setState({query: this.state.query, loading: true});
    // const {query} = this.state;
    console.log(this.state.query)
  };



    // This is a helper method to toggle between a Single and a All
 renderSingleOrAll(){
    // This is a helper method to toggle between a Single and a All
  const allpost = this.state.artposts

    // Fiter function to find query that matches
     filterValue = (obj, key, value) => { 
        return obj.find(function(v){ return v[key] === value});
    }
    //theQ is what is currently in the Query
    const theQ = this.state.query;
    //If th value is found the object gets stored in a variable called foundQuery 
    const foundQuery = filterValue(allpost, "acronym", `${theQ.toUpperCase()}`)
   
    newArray = [];
     //the foundQuery gets pushed in an array called newArray. 
     //if nothing is found undefined gets pushed in the newArray 
    newArray.push(foundQuery);
    
    console.log(foundQuery)
    console.log(newArray)





  if  ((this.state.query === null) || (this.state.query === '')){
     //This returns all acronyms if the query is null or an empty string
     return (
      <View style={{backgroundColor: '#E1EEFA', alignItems: 'center'}} >
  
        <FlatList
        contentContainerStyle={styles.scrollview}
        // style={{alignContent: 'center', }}
        // contentContainerStyle={styles.scrollview}
        // onContentSizeChange={this.onContentSizeChange}
        //newArray===''?consle.lo(nosuc)
        //newArray===''?use this data called allpost
          data={allpost}
          keyExtractor={(x, i) => `list${i}`}
          onEndReached={this.handleEnd}
          onEndReachedThreshold={0.5}
          ListFooterComponent={() =>
            this.state.loading 
            ? null
            : <ActivityIndicator size='large' animating/>}
          renderItem={({item})=>
  
          <View 
          style={{
             width: 300,
             height: 378,
           
            margin: 15,
          }}>
            <View 
            // key={i}
            style={
              {
                width: 120,
                height: 120,
              }
            } >
           
              <Image
              source={{ uri: "http://localhost:3001/" + item.image }}
              // source={require(`./Server_Side/public/artpostimages/braidedupdo.jpeg`)} 
              style={{
                width: 300,  
                height: 290,   
                borderWidth: 6, 
                borderColor: 'rgba(255, 69, 48, .8)'
              }}alt={item.style}> 
              </Image>
  
              <View style={{  width: 300, backgroundColor: 'rgba(255, 69, 48, .8)'}}>
                  <Text>Acronym: {item.acronym}</Text>
                  <Text>Definition:  {item.definition}</Text> 
              </View>
            </View>
  
          </View>}
        // Closing tag for the Flatlist Component
        />
  
  
      </View>
    )
  
  }


else if ( (foundQuery === undefined ) ) {
  //This returns searching for acronym if foundQuery is undefined
return(
  <Text>Searching</Text>
)
}

else  {
  //This returns a single acronym because foundQuery is not undefined (foundQuery !== undefined)
  return (
    <View style={{backgroundColor: '#E1EEFA', alignItems: 'center'}} >

      <FlatList
      contentContainerStyle={styles.scrollview}
      // style={{alignContent: 'center', }}
      // contentContainerStyle={styles.scrollview}
      // onContentSizeChange={this.onContentSizeChange}
        data={newArray}
        keyExtractor={(x, i) => `list${i}`}
        onEndReached={this.handleEnd}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() =>
          this.state.loading 
          ? null
          : <ActivityIndicator size='large' animating/>}
        renderItem={({item})=>


        <View 
        style={{
           width: 300,
           height: 378,
         
          margin: 15,
        }}>
          <View 
          // key={i}
          style={
            {
              width: 120,
              height: 120,
            }
          } >
         
            <Image
            source={{ uri: "http://localhost:3001/" + item.image }}
            // source={require(`./Server_Side/public/artpostimages/braidedupdo.jpeg`)} 
            style={{
              width: 300,  
              height: 290,   
              borderWidth: 6, 
              borderColor: 'rgba(255, 69, 48, .8)'
            }}alt={item.style}> 
            </Image>

            <View style={{  width: 300, backgroundColor: 'rgba(255, 69, 48, .8)'}}>
                <Text>Acronym: {item.acronym}</Text>
                <Text>Definition:  {item.definition}</Text> 
            </View>
          </View>

        </View>}
      // Closing tag for the Flatlist Component
      />


    </View>
  )
}
 
}


// ////////////////////////////////////////////////
// ////////////////////////////////////////////////
// ////////// Main Render Function /////////////////
// ////////////////////////////////////////////////
// ////////////////////////////////////////////////
  render() {
    
    return (
      ///////////////////////////////////
      ///////////////////////////////////
      // This Being Return always!
      ///////////////////////////////////
      ///////////////////////////////////
      <View style={{backgroundColor: '#E1EEFA', alignItems: 'center'}} >
        <TextInput
        style = {styles.textInputSearch}
        label='Query'
        placeholder = 'Enter an acronym'
        value={this.state.query}
        onChangeText={query => this.setState({query: query})}
        // executeQuery={this.executeQuery()}
        // checkifmatch={this.checkifmatch()}
        >
        </TextInput>



        {/* This is the Conditional Piece */}
        {this.renderSingleOrAll()}
        {/* This is the Conditional Piece */}


      </View>
      ///////////////////////////////////
      ///////////////////////////////////
      // This Being Return always!
      ///////////////////////////////////
      ///////////////////////////////////
    );
  }
}

const styles = StyleSheet.create({

scrollview: {
    flexGrow: 1,
    // width: 300,  
    justifyContent: 'center',
    alignItems: 'center',
    // justifyContent: 'flex-start',
    // flexWrap: 'wrap',
  },
  textInputSearch: {
    // alignSelf:'center',
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
    marginTop: 10,
    height: 40,
    width: 132,
    paddingLeft: 10
  },
  

});

export  {aWordScreen};
// I had to export the object with a key of aWordScreen ex. {aWordScreen: aWordscreen} 
// in order to export it from the index file using the following method 
// export * from './aWordScreen';