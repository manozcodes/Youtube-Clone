import React from "react";
import { Text, View, FlatList, ScrollView } from "react-native";
import Constant from "expo-constants";
import Header from "../components/Header";
import Card from "../components/Card";
import { useSelector } from "react-redux";

const LittleCard = ({ name }) => {
  return (
    <View
      style={{
        backgroundColor: "red",
        width: 170,
        borderRadius: 16,
        height: 50,
        marginTop: 10,
      }}
    >
      <Text
        style={{
          textAlign: "center",
          color: "white",
          fontSize: 22,
          marginTop: 11,
        }}
      >
        {name}
      </Text>
    </View>
  );
};

const Explore = () => {
  const CardData = useSelector((state) => {
    return state.cardData;
  });
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          <LittleCard name="Gaming" />
          <LittleCard name="Trending" />
        </View>
        <Text
          style={{
            margin: 8,
            fontSize: 22,
            // borderBottomWidth: 1,
            textAlign: "center",
            fontWeight: "bold",
            marginBottom: 30,
            marginTop: 30,
          }}
        >
          Trending Videos
        </Text>
        <FlatList
          data={CardData}
          renderItem={({ item }) => {
            return (
              <Card
                videoId={item.id.videoId}
                title={item.snippet.title}
                channel={item.snippet.channelTitle}
              />
            );
          }}
          keyExtractor={(item) => item.id.videoId}
        />
      </ScrollView>
    </View>
  );
};

export default Explore;
