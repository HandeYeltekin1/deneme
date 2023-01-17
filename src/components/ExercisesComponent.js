import React from "react";
import { Text, StyleSheet, Image, View } from "react-native";

const ExercisesComponent = (props) => {
  return (
    <View>
      <Image source={props.imageSource} />
      <Text>{props.title}</Text>
      <Text style={{ fontSize: 10 }}>{props.Text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ExercisesComponent;
