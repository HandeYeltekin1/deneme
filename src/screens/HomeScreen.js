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
      <Button
        onPress={() => props.navigation.navigate("Image")}
        title="Go to Image Demo "
      />
      <Button
        onPress={() => props.navigation.navigate("Exercise")}
        title="Go to Exercies Demo "
      />

      <Button
        onPress={() => props.navigation.navigate("Counter")}
        title="Go to Counter Demo "
      />
      <Button
        onPress={() => props.navigation.navigate("Color")}
        title="Go to Color Demo "
      />
      <Button
        onPress={() => props.navigation.navigate("Square")}
        title="Go to Square Color Demo "
      />
      <Button
        onPress={() => props.navigation.navigate("Text")}
        title="Go to Text Input Demo "
      />
      <Button
        onPress={() => props.navigation.navigate("Box")}
        title="Go to Box Screen Demo "
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
