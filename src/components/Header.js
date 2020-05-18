import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign, Ionicons, Entypo } from "@expo/vector-icons";
import Constant from "expo-constants";
import { useNavigation, useTheme } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

export default function Header() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => {
    return state.myDarkMode;
  });
  const { colors } = useTheme();
  const mycolor = colors.iconColor;

  return (
    <View
      style={{
        marginTop: Constant.statusBarHeight,
        height: 45,
        backgroundColor: colors.headerColor,
        flexDirection: "row",
        justifyContent: "space-between",
        elevation: 2,
      }}
    >
      <View style={{ flexDirection: "row", margin: 5 }}>
        <AntDesign
          style={{ marginLeft: 20 }}
          name="youtube"
          size={32}
          color="red"
        />
        <Text
          style={{
            fontSize: 22,
            marginLeft: 6,
            marginTop: 3,
            fontWeight: "bold",
            color: mycolor,
          }}
        >
          YouTube
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          width: 150,
          margin: 5,
        }}
      >
        <Ionicons name="md-videocam" size={32} color={mycolor} />
        <Ionicons
          name="md-search"
          size={32}
          color={mycolor}
          onPress={() => navigation.navigate("search")}
        />
        <Entypo
          name="switch"
          size={32}
          color={mycolor}
          onPress={() =>
            dispatch({ type: "changeTheme", payload: !currentTheme })
          }
        />
      </View>
    </View>
  );
}
