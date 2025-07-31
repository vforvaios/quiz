import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import globalStyles from "./globalStyles";

export default function Index({ navigation }: any) {
  const router = useRouter();

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
          <View style={styles.viewClass}>
            <Image
              style={{ ...styles.logoClass }}
              source={require("../assets/images/logo.png")}
            />
          </View>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <TouchableOpacity
              style={globalStyles.buttonStyles}
              onPress={() => router.navigate("/(tabs)/search")}
            >
              <LinearGradient
                style={styles.linearGradientClass}
                colors={["#C8569B", "#BB6CE8"]}
              >
                <Text
                  style={[
                    globalStyles.textStyles,
                    {
                      fontSize: 18,
                      color: "#fff",
                    },
                  ]}
                >
                  START
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              style={globalStyles.buttonStyles}
              onPress={() => router.navigate("/(tabs)/search")}
            >
              <LinearGradient
                style={styles.linearGradientClass}
                colors={["#2C66A7", "#3F9FFC"]}
              >
                <Text
                  style={[
                    globalStyles.textStyles,
                    {
                      fontSize: 18,
                      color: "#fff",
                    },
                  ]}
                >
                  QUIT
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
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
  linearGradientClass: {
    width: "100%",
    height: "100%",
    display: "flex",
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 40,
    paddingLeft: 40,
    alignItems: "center",
    borderRadius: 20,
  },
});
