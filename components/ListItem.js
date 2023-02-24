import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
// import Swipeable from "react-native-gesture-handler/Swipeable";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

const SPACING = 20;
const AVATAR_SIZE = 70;

function ListItem({
  item = {
    name: "Usman",
    manufacturer: "m",
    model: "Engineer",
  },
}) {
  return (
    <View style={[styles.itemWrapper]}>
      <Image
        source={{
          uri: "https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg",
        }}
        style={styles.image}
      />
      <View style={{ flexShrink: 1 }}>
        <Text style={{ fontSize: 22, fontWeight: "700" }}>{item.name}</Text>
        <Text style={styles.model}>{item.model}</Text>
        <Text style={{ fontSize: 14, opacity: 0.8, color: "#0099cc" }}>
          {item.manufacturer}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemWrapper: {
    flexDirection: "row",
    padding: SPACING,
    marginBottom: SPACING,
    backgroundColor: "rgba(255,255,255,0.8)",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,
  },
  image: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE,
    marginRight: SPACING,
  },
  model: {
    fontSize: 18,
    opacity: 0.7,
  },
});

export default ListItem;
