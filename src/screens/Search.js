import React, { useState } from "react";
import {
  View,
  ScrollView,
  TextInput,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MiniCard from "../components/MiniCard";
import Constant from "expo-constants";
import { useSelector, useDispatch } from "react-redux";
import { useTheme } from "@react-navigation/native";

const Search = ({ navigation }) => {
  const { colors } = useTheme();
  const mycolor = colors.iconColor;

  const [value, setValue] = useState("");
  // const [miniCardData, setMiniCardData] = useState([]);
  const dispatch = useDispatch();
  const miniCardData = useSelector((state) => {
    return state.cardData;
  });
  const [loading, setloading] = useState(false);

  const fetchData = () => {
    setloading(true);
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=AIzaSyBnzc5d4rrrTOmjdZOj-o3s5Uoqd4ktLj8`
    )
      .then((res) => res.json())
      .then((data) => {
        setloading(false);
        dispatch({ type: "add", payload: data.items });
        // setMiniCardData(data.items);
        // console.log(data.items);
      });
  };
  return (
    <View style={{ flex: 1, marginTop: Constant.statusBarHeight }}>
      <View
        style={{
          padding: 5,
          flexDirection: "row",
          justifyContent: "space-around",
          elevation: 4,
          backgroundColor: colors.headerColor,
        }}
      >
        <Ionicons
          style={{ color: mycolor }}
          name="md-arrow-back"
          size={32}
          onPress={() => navigation.goBack()}
        />
        <TextInput
          style={{ width: "70%", backgroundColor: "#e6e6e6" }}
          value={value}
          onChangeText={(text) => setValue(text)}
        />
        <Ionicons
          style={{ color: mycolor }}
          name="md-send"
          size={32}
          onPress={() => fetchData()}
        />
      </View>
      {loading ? (
        <ActivityIndicator style={{ marginTop: 55 }} size="large" color="red" />
      ) : null}
      <FlatList
        data={miniCardData}
        renderItem={({ item }) => {
          return (
            <MiniCard
              videoId={item.id.videoId}
              title={item.snippet.title}
              channel={item.snippet.channelTitle}
            />
          );
        }}
        keyExtractor={(item) => item.id.videoId}
      />
    </View>
  );
};

export default Search;
