import { StyleSheet, Dimensions } from "react-native";

const style = StyleSheet.create({
  carContainer: {
    width: "100%",
    height: Dimensions.get('window').height+100,
  },
  titles: {
    marginTop: "30%",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "500",
    color: "#000000",
  },
  subtitle: {
    fontSize: 16,
    color: "#5c5e62",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 50,
    width: '100%'
  },
  subtitleCTA:{
    textDecorationLine: 'underline'
  }
});

export default style;
