import React from "react";
import { StyleSheet, Text, SafeAreaView, View, Image } from "react-native";
import Card from "../shared/card.js";
import { globalStyles, images } from "../styles/global.js";
import FlatButton from "../shared/button";

export default function ReviewDetails({ navigation, route }) {
  const { title, body, rating } = route.params;
  const pressHandler = () => {
    console.log("------going back-------");
    navigation.goBack();
  };
  return (
    <SafeAreaView style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>{title}</Text>
        <Text>{body}</Text>
        <View style={styles.rating}>
          <Text>Rating: </Text>
          <Image style={styles.image} source={images.ratings[rating]} />
        </View>
      </Card>
      <FlatButton onPress={pressHandler} text="Go Back" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderTopColor: "#4C79AF",
    borderTopWidth: 1,
    marginTop: 16,
    paddingTop: 16,
  },
  image: {
    width: 150,
    height: 30,
    resizeMode: "stretch",
  },
});
