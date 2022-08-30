import React from "react";
import { Text, View, Pressable, StyleSheet } from "react-native";

const Customer = () => {
  return (
    <View style={style.container}>
      {/* <Text style={style.text}>Clientes</Text> */}
      <View>
        <View>
          <Text style={style.text}>Nombre:Carlos Rodriguez</Text>
        </View>
        <View>
          <Text style={style.text}>CUIT: 21 36456654 9</Text>
        </View>
        <View>
          <Text style={style.text}>CIUDAD : S M de Tucuman</Text>
        </View>
      </View>

      <Pressable style={style.btnStyle}>
        <Text style={style.text}>DETALLE</Text>
      </Pressable>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    // alignContent: "center",
    padding: 5,
  },
  btnStyle: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "#0056b3",
    margin: 15,
  },
  text: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    // padding: 5,
  },
});

export default Customer;
