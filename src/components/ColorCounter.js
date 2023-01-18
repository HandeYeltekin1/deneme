import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Value } from "react-native-reanimated";
import SquareScreen from "../screens/SquareScreen";

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button title={` Increase ${color}`} onPress={() => onIncrease()} />
      <Button title={`Decrease ${color}`} onPress={() => onDecrease()} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;
