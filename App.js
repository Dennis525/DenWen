import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, Platform } from 'react-native';

export default function App() {
  const handlePress = () => console.log("Text pressed");
  return (
    <View style={styles.container}>
      <Text onPress={handlePress}>THE DOC PLACE!</Text>
      <Image 
      style={styles.trial} source={require("./picture/daniele-levis-pelusi-8fxkKOPTtyU-unsplash.jpg")} />
      <Button
      color="orange"
      title="Click me" onPress={() =>Alert.alert("My title","My message",
      [{text:"Yes", onPress: () =>console.log("Yes")},{text:"No", onPress:()=>console.log("No")},])}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1 ,
    backgroundColor: "#fff",
    paddingTop: Platform.OS ==='android' ? StatusBar.currentHeight :0,
    justifyContent: "center",
    alignItems: "center",
  },
  trial: {
    width: 70,
    height: 90,
    justifyContent: "center",
    alignItems: "center",
  
  },
});
