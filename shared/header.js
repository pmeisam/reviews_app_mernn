import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ImageBackground,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header({ navigation, title }) {
  const openDrawer = () => {
    navigation.openDrawer();
  };
  return (
    <ImageBackground
      // source={require("../assets/background.jpeg")}
      style={styles.header}
    >
      <MaterialIcons
        name="menu"
        size={28}
        style={styles.icon}
        onPress={openDrawer}
      />
      <View style={styles.headerTitle}>
        <Image
          style={styles.headerLogo}
          source={require("../assets/favicon.png")}
        />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    width: Dimensions.get("screen").width,
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "red",
  },
  headerText: {
    // fontFamily: "VictorMono-SemiBoldItalic",
    fontSize: 20,
    color: "#fff",
    letterSpacing: 1,
  },
  icon: {
    position: "absolute",
    left: 16,
    color: "#fff",
  },
  headerTitle: {
    flexDirection: "row",
  },
  headerLogo: {
    height: 26,
    width: 26,
    marginRight: 10,
  },
});
