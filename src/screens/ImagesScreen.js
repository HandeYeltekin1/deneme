import React from "react";
import {
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  View,
  navigation,
  ImageBackground,
} from "react-native";
const ImagesScreen = (navigation) => {
  const image = {
    url: "https://www.google.com/search?q=mountain&client=safari&rls=en&sxsrf=AJOqlzUSRxSZvXADufvXjoADFeYEZcmQJQ:1673940848309&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi9vo3Ni878AhVNVPEDHRbsDpsQ_AUoAXoECAEQAw&biw=1920&bih=992&dpr=1#imgrc=_piKIIEbENzkfM",
  };
  return (
    <View>
      <Button onPress={() => navigation.navigate("Home")} title="Forest" />
      <ImageBackground source={image}></ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({});

export default ImagesScreen;
