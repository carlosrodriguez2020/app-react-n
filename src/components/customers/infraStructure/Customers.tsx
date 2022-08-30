import React from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  StyleSheet,
  StatusBar,
} from "react-native";
import Customer from "./Customer";

const Customers = () => {
  return (
    <SafeAreaView style={style.scroll}>
      <ScrollView style={style.scrollView}>
        <View style={style.container}>
          <Customer></Customer>
          <Customer></Customer>
          <Customer></Customer>
          <Customer></Customer>
          <Customer></Customer>
          <Customer></Customer>
          <Customer></Customer>
          <Customer></Customer>
          <Customer></Customer>
          <Customer></Customer>
          <Customer></Customer>
          <Customer></Customer>
          <Customer></Customer>
          <Customer></Customer>
          <Customer></Customer>
          <Customer></Customer>
          <Customer></Customer>
          <Customer></Customer>
          <Customer></Customer>
          <Customer></Customer>
          <Customer></Customer>
          <Customer></Customer>
          <Customer></Customer>
          <Customer></Customer>
          <Customer></Customer>
          <Customer></Customer>
          <Customer></Customer>
          <Customer></Customer>
          <Customer></Customer>
          <Customer></Customer>
          <Customer></Customer>
          <Customer></Customer>
          <Customer></Customer>
          <Customer></Customer>
          <Customer></Customer>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  container: {
    flexDirection: "column",
    // flexWrap: "wrap",
    // alignItems: "center",
    // alignContent: "center",
  },
  scroll: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },

  scrollView: {
    marginHorizontal: 5,
  },

  // btnStyle: {
  //   alignItems: "center",
  //   justifyContent: "center",
  //   paddingVertical: 15,
  //   paddingHorizontal: 32,
  //   borderRadius: 10,
  //   elevation: 3,
  //   backgroundColor: "#0056b3",
  //   margin: 15,
  // },
  // text: {
  //   fontSize: 18,
  //   lineHeight: 21,
  //   fontWeight: "bold",
  //   letterSpacing: 0.25,
  //   color: "white",
  // },
});

export default Customers;
