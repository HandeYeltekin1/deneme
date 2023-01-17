import React from "react";
import { Text, StyleSheet, Button, View, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>hi there </Text>
      <Button
        onPress={() => props.navigation.navigate("Components")}
        title="Go To Components Demo"
      />
      <TouchableOpacity onPress={() => props.navigation.navigate("List")}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
      <Button onPress={() => console.log("Click")} title="Go to Image Demo " />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
