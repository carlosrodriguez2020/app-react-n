import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Customer from "./src/components/customers/infraStructure/Customer";
import Customers from "./src/components/customers/infraStructure/Customers";
import Home from "./src/components/Home";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        <Home></Home>
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
    // backgroundColor: `#f0ffff`,
    backgroundColor: "#292929",
    alignItems: "center",
    justifyContent: "center",
  },
});
