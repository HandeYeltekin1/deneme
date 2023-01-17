import React from "react";
import { Text, StyleSheet, View } from "react-native";
const ComponentsScreen = () => {
  const greek = "I am not coming";
  return (
    <View>
      <Text style={styles.textStyle}>This is the component screen.</Text>
      <Text>{greek}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 50,
  },
});

export default ComponentsScreen;
