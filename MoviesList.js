import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

import ListItem from "./components/ListItem";

const MoviesList = ({ movies }) => {
  return (
    <FlatList
      data={movies}
      keyExtractor={(menuItem) => menuItem.created}
      renderItem={({ item }) => {
        return (
          <ListItem
            item={item}
            // IconComponent={
            //   <Icon
            //     name={item.icon.name}
            //     family="mci"
            //   />
            // }
            onPress={() => console.log("tapped")}
          />
        );
      }}
    />
  );
};

export default MoviesList;

const styles = StyleSheet.create({});
