// import React, { useState } from "react";
// import { Button, Text, View, StyleSheet } from "react-native";
// import ColorCounter from "../components/ColorCounter";

// const SquareScreen = () => {
//   const [red, setRed] = useState(0);
//   const [green, setGreen] = useState(0);
//   const [blue, setBlue] = useState(0);
//   const AddColor = (color) => {
//     if (color == "Red") {
//       if (red < 255) {
//         setRed(red + 1);
//       }
//     } else if (color == "Green") {
//       if (green < 255) {
//         setGreen(green + 1);
//       }
//     } else {
//       if (blue < 255) {
//         setBlue(blue + 1);
//       }
//     }
//   };
//   const DecColor = (color) => {
//     if (color == "Red") {
//       if (red > 0) {
//         setRed(red - 1);
//       }
//     } else if (color == "Green") {
//       if (green > 0) {
//         setGreen(green - 1);
//       }
//     } else {
//       if (blue > 0) {
//         setBlue(blue - 1);
//       }
//     }
//   };
//   return (
//     <View>
//       <Text>Square Screen</Text>

//       <ColorCounter
//         color="Red"
//         onIncrease={() => {
//           AddColor();
//           //   if (red < 255) {
//           //     setRed(red + 1);
//           //   }
//         }}
//         onDecrease={() => {
//           DecColor();
//           //   if (red != 0) {
//           //     setRed(red - 1);
//           //   }
//         }}
//       />
//       <ColorCounter
//         color="Green"
//         onIncrease={() => {
//           AddColor();
//           //   if (green < 255) {
//           //     setGreen(green + 1);
//           //   }
//         }}
//         onDecrease={() => {
//           DecColor();
//           //   if (green != 0) {
//           //     setGreen(green - 1);
//           //   }
//         }}
//       />
//       <ColorCounter
//         color="Blue"
//         onIncrease={() => {
//           AddColor();
//           //   if (blue < 255) {
//           //     setBlue(blue + 1);
//           //   }
//         }}
//         onDecrease={() => {
//           DecColor();
//           //   if (blue != 0) {
//           //     setBlue(blue - 1);
//           //   }
//         }}
//       />
//       <View
//         style={{
//           height: 150,
//           width: 150,
//           backgroundColor: `rgb(${red},${green},${blue})`,
//         }}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({});

// export default SquareScreen;

import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;
const reducer = (state, action) => {
  // state === {red : number , green : number , blue : number}
  //action === {colorToChange : 'red' || 'green' || 'blue' , amount : 15 || -15}
  switch (action.colorToChange) {
    case "red":
      if (state.red + action.amount > 255 || state.red + action.amount < 0) {
        return state;
      }
      return { ...state, red: state.red + action.amount };
    case "green":
      if (
        state.green + action.amount > 255 ||
        state.green + action.amount < 0
      ) {
        return state;
      }
      return { ...state, green: state.green + action.amount };
    case "blue":
      if (state.blue + action.amount > 255 || state.blue + action.amount < 0) {
        return state;
      }
      return { ...state, blue: state.blue + action.amount };
    default:
      return state;
  }
};
const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  return (
    <View>
      <ColorCounter
        color="red"
        onIncrease={() =>
          dispatch({ colorToChange: "red", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "red", amount: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color="green"
        onIncrease={() =>
          dispatch({ colorToChange: "green", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "green", amount: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color="blue"
        onIncrease={() =>
          dispatch({ colorToChange: "blue", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "blue", amount: -1 * COLOR_INCREMENT })
        }
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${state.red} , ${state.green} , ${state.blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
