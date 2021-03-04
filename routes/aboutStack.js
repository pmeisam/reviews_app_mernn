import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/About";
import Header from "../shared/header";

const AboutStack = ({ navigation }) => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "coral",
        },
        headerTitleStyle: {
          color: "black",
          // fontFamily: "VictorMono-SemiBoldItalic",
        },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
      }}
    >
      <Screen
        name="About"
        component={About}
        options={{
          headerTitle: () => <Header navigation={navigation} title="About" />,
        }}
      />
    </Navigator>
  );
};

export default AboutStack;
