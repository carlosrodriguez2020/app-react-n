import React from "react";
import { SafeAreaView, View, ScrollView, StyleSheet } from "react-native";
import Customer from "./Customer";

const Customers = () => {
  return (
    <SafeAreaView>
      <ScrollView>
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
