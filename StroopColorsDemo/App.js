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

      NameHolder : " ",

      randomColors: '#000000',

      background: '#00BCD4'
    }
    
}

GenerateRandomColors=()=> 
{
  var colors = ["Orange", "White", "Yellow", "Red"];

  var RandomColor = colors[Math.floor(Math.random() * colors.length)];

  var candy = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';

  var backgroundBow = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
 
    
  this.setState({
    
    NameHolder : RandomColor,
    
    count: this.state.count + 1,

    randomColors: candy,

    background: backgroundBow
    
    })
}

render() {
  return (
      <View style={[styles.MainContainer, {backgroundColor: this.state.background}]}>

      <Text style={{fontSize: 20}}>You clicked {this.state.count} times.</Text>

       <Text style={{marginBottom: 10, fontSize: 40, color: this.state.randomColors}}>{this.state.NameHolder}</Text>
 
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





