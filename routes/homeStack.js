import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";
import Header from "../shared/header";
/*
npm install @react-navigation/native
npm install @react-navigation/stack
npm install @react-navigation/drawer
npx pod-install ios
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
*/

const HomeStack = ({ navigation }) => {
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
        name="Home"
        component={Home}
        options={{
          headerTitle: () => <Header navigation={navigation} title="Reviews" />,
        }}
      />
      <Screen name="Details" component={ReviewDetails} />
    </Navigator>
  );
};

export default HomeStack;
