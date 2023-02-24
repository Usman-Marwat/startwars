import { useEffect, useState } from "react";
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MoviesList from "./MoviesList";

import useApi from "./hooks/useApi";
import moviesApi from "./api/movies";
import ErrorMessage from "./components/ErrorMessage";

export default function App() {
  const [error, SetError] = useState("Usman");
  const [pageNumber, setPageNumber] = useState(1);
  const moviesGetApi = useApi(moviesApi.getMovies);

  const getMovies = async () => {
    const result = await moviesGetApi.request(pageNumber);
    if (!result.ok) SetError("Error in loading");
  };

  const LoadForward = () => {
    setPageNumber(pageNumber + 1);
  };

  const LoadBackward = () => {
    setPageNumber(pageNumber - 1);
  };

  useEffect(() => {
    getMovies();
  }, [pageNumber]);

  return (
    <SafeAreaView style={styles.container}>
      {error && <ErrorMessage> {error}</ErrorMessage>}
      <MoviesList movies={moviesGetApi.data.results} />
      <View style={styles.btnContainer}>
        <Button title="Previous" onPress={LoadBackward} />
        <Button title="Next" onPress={LoadForward} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: "row",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
