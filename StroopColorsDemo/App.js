/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput
} from 'react-native';

export default class App extends Component {
constructor() {
  super()
    this.state = {
      value: "Foram"
    }
    this.handleUserInput = this.handleUserInput.bind(this)
}

handleUserInput(userInput) {
    this.setState({
        value: userInput
    })
}

render() {
  return (
    <View style={styles.container}>
    
        <Text style={styles.userColor}> Insert your color</Text>
    
            <TextInput
                defaultValue={this.state.value}
                onChangeText={this.handleUserInput}
            />
            <Text> Your favourite color is {this.state.value} </Text>
    </View>
    );
}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    // flexDirection: 'row'
    //always colomn by default
  },

    userColor: {
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 30,
      color: 'blue'
    }

  // half1: {
  //  flex: 1,
  //  justifyContent: 'center',
  //  alignItems: 'center',
  //  backgroundColor: 'green'
  // },

  // half2: {
  //  flex: 1,
  //  flexDirection: 'row',
  //  backgroundColor: 'blue'
  // },

  // half2x: {
  //  flex: 1,
  //  justifyContent: 'center',
  //  alignItems: 'center',
  // },

  // half21: {
  //  backgroundColor: 'orange'
  // },

  // half22: {
  //  backgroundColor: 'yellow'
  // },

  // text: {
  //  fontSize: 25,
  //  color: 'black'
  // }

  
})





