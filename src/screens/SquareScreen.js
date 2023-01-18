import React, { useState } from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const AddColor = (color) => {
    if (color == "Red") {
      if (red < 255) {
        setRed(red + 1);
      }
    } else if (color == "Green") {
      if (green < 255) {
        setGreen(green + 1);
      }
    } else {
      if (blue < 255) {
        setBlue(blue + 1);
      }
    }
  };
  const DecColor = (color) => {
    if (color == "Red") {
      if (red > 0) {
        setRed(red - 1);
      }
    } else if (color == "Green") {
      if (green > 0) {
        setGreen(green - 1);
      }
    } else {
      if (blue > 0) {
        setBlue(blue - 1);
      }
    }
  };
  return (
    <View>
      <Text>Square Screen</Text>

      <ColorCounter
        color="Red"
        onIncrease={() => {
          AddColor();
          //   if (red < 255) {
          //     setRed(red + 1);
          //   }
        }}
        onDecrease={() => {
          DecColor();
          //   if (red != 0) {
          //     setRed(red - 1);
          //   }
        }}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => {
          AddColor();
          //   if (green < 255) {
          //     setGreen(green + 1);
          //   }
        }}
        onDecrease={() => {
          DecColor();
          //   if (green != 0) {
          //     setGreen(green - 1);
          //   }
        }}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => {
          AddColor();
          //   if (blue < 255) {
          //     setBlue(blue + 1);
          //   }
        }}
        onDecrease={() => {
          DecColor();
          //   if (blue != 0) {
          //     setBlue(blue - 1);
          //   }
        }}
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
