import React from "react";
import { Image, ImageBackground, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Search = () => {
  return (
    <SafeAreaView
      style={{
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ImageBackground
        source={require("../../assets/images/bg.jpg")}
        style={{ flex: 1, width: "100%", height: "100%" }}
      >
        <View style={styles.viewClass}>
          <Image
            style={{ ...styles.logoClass }}
            source={require("../../assets/images/logo.png")}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  viewClass: {
    height: 200,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  logoClass: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
