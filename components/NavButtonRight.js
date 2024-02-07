import { View, Text, Pressable, StyleSheet } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";

export default function NavButtonRight() {
  return (
    <View style={styles.container}>
      <Pressable>
        <FontAwesome6 name="dice-six" size={32} color="white" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: "100%",
  },
});
