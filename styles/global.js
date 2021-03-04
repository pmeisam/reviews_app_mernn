import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    padding: 24,
  },
  titleText: {
    // fontFamily: "open-sans-italic",
    fontSize: 24,
    color: "#333",
    fontWeight: "bold",
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  button: {
    borderWidth: 1,
    borderColor: "green",
    borderStyle: "dotted",
    color: "red",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
  errorText: {
    color: "crimson",
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 6,
    textAlign: "center",
  },
});

export const images = {
  ratings: {
    1: require("../assets/Star_rating_1_of_5.png"),
    2: require("../assets/Star_rating_2_of_5.png"),
    3: require("../assets/Star_rating_3_of_5.png"),
    4: require("../assets/Star_rating_4_of_5.png"),
    5: require("../assets/Star_rating_5_of_5.png"),
  },
};
