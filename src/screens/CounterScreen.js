import React, { useState } from "react";
import { Text, View, Button, StyleSheet } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          if (counter != 0) {
            setCounter(counter - 1);
          }
        }}
      />
      <Text>{counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
