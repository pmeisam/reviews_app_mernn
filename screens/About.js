import React from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { globalStyles } from "../styles/global.js";

export default function About() {
  return (
    <SafeAreaView style={globalStyles.container}>
      <Text>
        This is a project from code ninja to learn basics of react native
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
