import React from "react";
import { StatusBar, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Index = () => {
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
        <View>
          <Text>Index Details Screen</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Index;
