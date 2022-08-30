import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import Customer from "./src/components/customers/infraStructure/Customer";
import Customers from "./src/components/customers/infraStructure/Customers";
import Home from "./src/components/Home";
import CustomerDetail from "./src/components/customers/infraStructure/CustomerDetail";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ClientDto from "./src/components/customers/domain/ClientDto";
import Pedido from "./src/components/oders/Infraestructure/Pedido";
import Dropdown from "./src/core/Dropdow";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Image
        source={{ uri: "imgs:/ypf.png" }}
        style={{ width: 40, height: 40 }}
      /> */}

      <Text>
        {/* <Dropdown></Dropdown> */}
        <Pedido></Pedido>
        {/* <ClientDto></ClientDto> */}
        {/* <CustomerDetail></CustomerDetail> */}
        {/* <Home></Home> */}
        {/* <Customers></Customers> */}
        {/* <Customer></Customer> */}
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `#f0ffff`,
    // backgroundColor: "#292929",
    alignItems: "center",
    justifyContent: "center",
  },
});
