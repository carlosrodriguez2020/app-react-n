import React from "react";
import { StyleSheet } from "react-native";
import Home from "./src/components/Home";
import CustomerDetail from "./src/components/customers/infraStructure/CustomerDetail";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
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
        <Stack.Screen name="Pedidos" component={Orders} />
        <Stack.Screen name="DetallesPedido" component={OrderDetail} />
        <Stack.Screen name="Productos" component={Products} />
        <Stack.Screen name="Clientes" component={CustomerList} />
        <Stack.Screen name="DetalleCliente" component={CustomerDetail} />
        <Stack.Screen name="NuevoPedido" component={CustomerNewOrders} />
        <Stack.Screen name="Stock" component={Stock} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `#f0ffff`,
    alignItems: "center",
    justifyContent: "center",
  },
});
