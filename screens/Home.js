import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Modal,
  Button,
} from "react-native";
import Card from "../shared/card.js";
import { globalStyles } from "../styles/global.js";
import { MaterialIcons } from "@expo/vector-icons";

export default function Home({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "lorem ipsum",
      key: "1",
    },
    {
      title: "Gotta catch Them All(again)",
      rating: 4,
      body: "lorem ipsum",
      key: "2",
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 1,
      body: "lorem ipsum",
      key: "3",
    },
  ]);
  const pressHandler = (item) => {
    // navigation.navigate('ReviewDetails')
    navigation.push("Details", item);
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <SafeAreaView>
          <MaterialIcons
            style={{ ...styles.modalToggle, ...styles.modalClose }}
            name="close"
            size={24}
            onPress={() => setModalOpen(false)}
          />
        </SafeAreaView>
      </Modal>
      <MaterialIcons
        style={styles.modalToggle}
        name="add"
        size={24}
        onPress={() => setModalOpen(true)}
      />
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item)}>
            <Card>
              <Text styles={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  modalToggle: {
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "darkgray",
    borderRadius: 10,
    padding: 10,
    alignSelf: "center",
    borderStyle: "dotted",
  },
  modalClose: {
    marginBottom: 0,
    alignSelf: "flex-start",
    marginLeft: 10,
  },
});
