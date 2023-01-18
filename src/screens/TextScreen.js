import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");
  const [control, setControl] = useState("");
  return (
    <View>
      <Text>Text Input Kullanımı </Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none" // baş harfini büyük yapma
        autoCorrect={false} // otomatik düzeltme
        value={name} // ekran açıldığında gözükecek değer
        onChangeText={(newValue) => {
          setName(newValue);
          if (newValue.length < 5) {
            setControl("Lütfen 5 karakter uzunluğunda veri giriniz");
          } else if (newValue.length >= 5) {
            setControl("");
          }
        }} // texti değiiştirildiğinde yeni girilen değeri state e aktarıldı .
      />
      <Text>{name.length}</Text>
      <Text>{control}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextScreen;
