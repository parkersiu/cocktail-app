import { Image, StyleSheet } from "react-native";

export default function ImageViewer({ imageSource }) {
  return <Image source={imageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
  },
});
