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
// import { Text, StyleSheet, View, FlatList } from "react-native";

// const ExercisesScreen = () => {
//   const friends = [
//     { name: "Hande ", age: "21" },
//     { name: "Ali ", age: "24" },
//     { name: "Nihal", age: "44" },
//     { name: "Ferhat", age: "41" },
//   ];
//   return (
//     <FlatList
//       showsHorizontalScrollIndicator={false}
//       keyExtractor={(friend) => friend.name}
//       data={friends}
//       renderItem={({ item }) => {
//         return (
//           <Text style={styles.TextStyle}>
//             {item.name} -- {item.age}
//           </Text>
//         );
//       }}
//     />
//   );
// };
// const styles = StyleSheet.create({
//   TextStyle: {
//     marginVertical: 20,
//   },
// });

// 3. EGZERSİZ
import { View, StyleSheet, Text, Image } from "react-native";
import ExercisesComponent from "../components/ExercisesComponent";
const ExercisesScreen = () => {
  return (
    <View>
      <ExercisesComponent
        title="Forest"
        Text="ImageScore : 9"
        imageSource={require("../../assets/forest.jpg")}
      />
      <ExercisesComponent
        title="Beach"
        Text="Image Score : 7"
        imageSource={require("../../assets/beach.jpg")}
      />
      <ExercisesComponent
        title="Mountain"
        Text="Image Score : 4"
        imageSource={require("../../assets/mountain.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export default ExercisesScreen;
