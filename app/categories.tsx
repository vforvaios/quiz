import React from "react";
import {
  FlatList,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Categories = () => {
  const quizCategories = [
    {
      id: 1,
      title: "Sports",
    },
    {
      id: 2,
      title: "History",
    },
    {
      id: 3,
      title: "Geography",
    },
  ];
  return (
    <SafeAreaProvider>
      <StatusBar hidden={true} backgroundColor="transparent" />
      <SafeAreaView
        style={{
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ImageBackground
          source={require("../assets/images/bg.jpg")}
          style={{ flex: 1, width: "100%", height: "100%" }}
        >
          <FlatList
            data={quizCategories}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity onPress={() => {}}>
                  <Text>{item?.title}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Categories;

const styles = StyleSheet.create({});
