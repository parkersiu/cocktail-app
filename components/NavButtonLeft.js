import { View, Text, Pressable, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function NavButtonLeft(data, setData) {
  return (
    <Pressable style={styles.container}>
      <Feather name="arrow-left" size={32} color="black" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: "100%",
  },
});
