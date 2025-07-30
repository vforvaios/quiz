import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
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
        source={require("../assets/images/bg.jpg")}
        style={{ flex: 1, width: "100%", height: "100%" }}
      >
        <View style={styles.viewClass}>
          <Image
            style={{ ...styles.logoClass }}
            source={require("../assets/images/logo.png")}
          />
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <TouchableOpacity style={styles.buttonClass} onPress={() => alert()}>
            <Text
              style={{ fontFamily: "RobotoCondensed-Regular", fontSize: 18 }}
            >
              START
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  viewClass: {
    height: 350,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 100,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  logoClass: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  buttonClass: {
    backgroundColor: "yellow",
    color: "#ddd",
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 40,
    paddingLeft: 40,
    borderRadius: 20,
  },
});
