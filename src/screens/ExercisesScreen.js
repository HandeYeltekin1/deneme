import React from "react";

//1. EGZERSİZ
// import { Text, StyleSheet, View } from "react-native";

// const ExercisesScreen = () => {
//   const name = "Hande";
//   return (
//     <View>
//       <Text style={styles.titleStyle}>
//         Getting started with React Native !{" "}
//       </Text>
//       <Text style={styles.textStyle}> My name is {name}</Text>
//     </View>
//   );
// };

// const styles =StyleSheet.create({
//   titleStyle: {
//     fontSize: 45
//   },
//   textStyle: {
//     fontSize: 20
//   }
// });

// 2. EGZERSİZ
import { Text, StyleSheet, View, FlatList } from "react-native";

const ExercisesScreen = () => {
  const friends = [
    { name: "Hande ", age: "21" },
    { name: "Ali ", age: "24" },
    { name: "Nihal", age: "44" },
    { name: "Ferhat", age: "41" },
  ];
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.TextStyle}>
            {item.name} -- {item.age}
          </Text>
        );
      }}
    />
  );
};
const styles = StyleSheet.create({
  TextStyle: {
    marginVertical: 20,
  },
});

export default ExercisesScreen;
