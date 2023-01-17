import React from "react";
import { Text, StyleSheet, FlatList } from "react-native";

const ListsSreen = () => {
  const friends = [
    { name: "Hande" },
    { name: "Ali" },
    { name: "Nihal" },
    { name: "Ferhat" },
    { name: "Ozan" },
    { name: "Efe" },
  ];
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return <Text style={styles.textStyle}>{item.name}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListsSreen;
