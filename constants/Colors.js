import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  bg: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#7B71F9",
  },
  safeArea: {
    flex: 1,
    display: "flex",
  },

  text: {
    fontSize: 20,
    color: "#091057",
    fontWeight: "700",
    textAlign: "center",
  },

  heading: {
    marginTop: 150,
    color: "white",
    fontSize: 40,
    fontWeight: "900",
    marginBottom: 13,
  },

  logo: {
    marginTop: 50,
    width: 400,
    height: 400,
  },

  center: {
    alignItems: "center",
  },

  button: {
    width: 400,
    height: 50,
    padding: 10,
    borderRadius: 15,
    backgroundColor: "#FCC737",
    marginTop: 100,
  },

  backButton: {
    padding: 10,
    borderTopEndRadius: 15,
    borderBottomLeftRadius: 15,
    backgroundColor: "#FCC737",
  },

  back: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginLeft: 50,
    marginTop: 25,
  },

  bottom: {
    position: "absolute",
    bottom: 0, // Stick to the bottom
    width: "100%",
    height: 100,
    backgroundColor: "white",
  },
});
