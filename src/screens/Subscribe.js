import React from "react";
import { Text, View } from "react-native";
import Header from "../components/Header";
import { FontAwesome5 } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";

const Subscribe = () => {
  const { colors } = useTheme();
  const mycolor = colors.iconColor;
  const laugh = colors.tabIcon;

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={{ flexDirection: "row" }}>
        <Text style={{ marginLeft: 20, marginTop: 20, color: mycolor }}>
          I know you're a coder. Do own your own.
        </Text>
        <FontAwesome5
          style={{ marginTop: 10, marginLeft: 10, color: laugh }}
          name="laugh-beam"
          size={32}
        />
      </View>
    </View>
  );
};

export default Subscribe;
