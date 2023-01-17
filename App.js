import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ExercisesScreen from "./src/screens/ExercisesScreen";
import ListsSreen from "./src/screens/ListsScreen";
import ImagesScreen from "./src/screens/ImagesScreen";
import CounterScreen from "./src/screens/CounterScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    Exercise: ExercisesScreen,
    List: ListsSreen,
    Image: ImagesScreen,
    Counter: CounterScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
