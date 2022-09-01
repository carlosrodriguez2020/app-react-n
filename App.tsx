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
import Dropdown from "./src/core/Dropdow";
// import ProductList from "./src/components/products/infraestructure/ProductList";
import Products from "./src/components/products/infraestructure/Products";
import Orders from "./src/components/orders/Infraestructure/Orders";
import CustomerNewOrders from "./src/components/customers/infraStructure/CustomerNewOrders";


// const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      {/* <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>

        <Stack.Navigator>
          <Stack.Screen name="Products" component={Products} />
        </Stack.Navigator>
      </NavigationContainer> */}

      {/* pendiente */}

      {/* <Stack.Navigator>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="products" component={Products} />

      </Stack.Navigator>
 */}


      <Text>

        <CustomerNewOrders />
        {/* <TitleCustomersOrders></TitleCustomersOrders> */}

        {/* <Orders></Orders> */}
        {/* <Products></Products> */}
        {/* <Dropdown></Dropdown> */}
        {/* <Pedido></Pedido> */}
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
