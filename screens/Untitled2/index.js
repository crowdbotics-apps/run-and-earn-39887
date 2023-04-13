import { ImageBackground } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled2 = ({
  route
}) => {
  const {} = route.params || {};
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }} style={styles.huZymPlN}>
        
      <ImageBackground style={styles.mXYZGger} source={require("./Get Started.png")} resizeMode="cover"></ImageBackground></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
  },
  eHFajcBx: {
    height: 101,
    width: 105,
    backgroundColor: "#aa2727",
    borderRadius: 0,
    color: "#777777"
  },
  mXYZGger: {
    width: 315,
    height: 546,
    position: "absolute",
    left: 21.5,
    top: 14
  },
  huZymPlN: {
    width: 358,
    height: 574
  }
});
export default Untitled2;