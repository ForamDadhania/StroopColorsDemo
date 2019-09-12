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
  Button
} from 'react-native';

export default class App extends Component {
constructor() {
  super()
    this.state = {
      count: 0,
      NameHolder : " "
    }
    
}

GenerateRandomColors=()=> 
{
  var colors = ["Orange", "White", "Yellow", "Red"];
  var RandomColor = colors[Math.floor(Math.random() * colors.length)];
    
  this.setState({
    
    NameHolder : RandomColor,
    count: this.state.count + 1
    
    })
}

render() {
  return (
      <View style={styles.MainContainer}>
    
      <Text>You clicked {this.state.count} times</Text>
    
      <Text style={{marginBottom: 10, fontSize: 20}}>{this.state.NameHolder}</Text>
 
       <Button title="Generate Random colors" onPress={this.GenerateRandomColors}/>
        
      </View>
 
    );
  }
}

const styles = StyleSheet.create(
{
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
 
});





