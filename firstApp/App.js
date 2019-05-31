import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';

export default class App extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <Text>Hello World</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    display:"flex",
    width:"100%",
    justifyContent:"center",
    alignItems:"center",
    height:"100%",
  }
})
