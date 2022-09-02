import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Customer from "./src/components/customers/infraStructure/Customer";
import Customers from "./src/components/customers/infraStructure/Customers";
import Home from "./src/components/Home";
import CustomerDetail from "./src/components/customers/infraStructure/CustomerDetail";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ClientDto from "./src/components/customers/domain/ClientDto";
import Products from "./src/components/products/infraestructure/Products";
import Orders from "./src/components/orders/Infraestructure/Orders";
import CustomerNewOrders from "./src/components/customers/infraStructure/CustomerNewOrders";
import CustomerList from "./src/components/customers/infraStructure/CustomerList";

import 'react-native-gesture-handler';
import Stock from "./src/components/products/infraestructure/Stock";
import OrderDetail from "./src/components/orders/Infraestructure/OrderDetail";



const Stack = createNativeStackNavigator();

export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Orders" component={Orders} />
        <Stack.Screen name="OrderDetail" component={OrderDetail} />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="Customers" component={Customers} />
        <Stack.Screen name="CustomerList" component={CustomerList} />
        <Stack.Screen name="CustomerDetail" component={CustomerDetail} />
        <Stack.Screen name="CustomerNewOrders" component={CustomerNewOrders} />
        <Stack.Screen name="Stock" component={Stock} />
      </Stack.Navigator>
    </NavigationContainer>
  )
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
