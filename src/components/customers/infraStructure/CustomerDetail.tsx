import React from "react";
import { Text, View, Pressable, StyleSheet } from "react-native";

const CustomerDetail = () => {
  return (
    <View>
      {/* <Text style={style.text}>Clientes</Text> */}
      <Text style={style.sectionTitle}>Detalle del Cliente</Text>
      <View>
        <View style={style.container}>
          <Text style={style.text}>Nombre:Carlos Rodriguez</Text>
          <Text style={style.text}>CUIT: 21 36456654 9</Text>
          <Text style={style.text}>Ciudad : S M de Tucuman</Text>
          <Text style={style.text}>Provincia : S M de Tucuman</Text>
          <Text style={style.text}>Direccion : G. paz</Text>
          <Text style={style.text}>IdCliente : 12</Text>
          <Text style={style.text}>CondicionesIVA : RI</Text>
          <Text style={style.text}>Observaciones : RI</Text>
        </View>
      </View>
      <View style={style.sectionBtnStyle}>
        <Pressable style={style.btnStyle}>
          <Text style={style.text}>CLIENTES</Text>
        </Pressable>
        <Pressable style={style.btnStyle}>
          <Text style={style.text}>NUEVO PEDIDO</Text>
        </Pressable>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flexDirection: "column",
    flexWrap: "wrap",
    // alignItems: "center",
    justifyContent: "center",
    // alignContent: "center",
  },
  sectionTitle: {
    textAlign: "center",
    alignItems: "flex-start",
    fontSize: 20,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    margin: 20,
    paddingLeft: 20,
  },
  sectionBtnStyle: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  btnStyle: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    paddingHorizontal: 15,
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
    margin: 5,
    paddingLeft: 20,
  },
});

export default CustomerDetail;
