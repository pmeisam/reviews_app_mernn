import React, { useState } from "react";
import * as Font from "expo-font"; // has to be installed
import AppLoading from "expo-app-loading"; // has to be installed
import DrawerNavigation from "./routes/drawNavigation";

const getFonts = async () =>
  await Font.loadAsync({
    "open-sans-regular": require("./assets/fonts/Open_Sans/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/Open_Sans/OpenSans-Bold.ttf"),
    "open-sans-italic": require("./assets/fonts/Open_Sans/OpenSans-Italic.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return <DrawerNavigation />;
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={() => console.warn("error")}
      />
    );
  }
}
