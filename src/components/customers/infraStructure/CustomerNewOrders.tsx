import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import TitleCustomersOrders from "../../../core/TitleCustomersOrders";
import { RadioButton } from "react-native-paper";
import DropDown from "../../../core/DropDown";

const CustomerNewOrders = () => {
  const [checked, setChecked] = React.useState("first");

  console.log("hola");

  return (
    <View style={{ flex: 1, marginHorizontal: 50 }}>
      <TitleCustomersOrders />

      <Pressable style={style.btnStyle}>
        <Text style={style.text}>Agregar Pedido +</Text>
      </Pressable>

      <View>
        <View style={style.FilterProdcuts}>
          <RadioButton
            value="first"
            status={checked === "first" ? "checked" : "unchecked"}
            onPress={() => setChecked("first")}
          />
          <Text style={style.textTwo}>Nafta</Text>
        </View>

        <View style={style.FilterProdcuts}>
          <RadioButton
            value="second"
            status={checked === "Second" ? "checked" : "unchecked"}
            onPress={() => setChecked("second")}
          />
          <Text style={style.textTwo}>Diesel</Text>
        </View>

        <View style={style.FilterProdcuts}>
          <RadioButton
            value="third"
            status={checked === "third" ? "checked" : "unchecked"}
            onPress={() => setChecked("second")}
          />
          <Text style={style.textTwo}>Otros</Text>
        </View>
      </View>

      <DropDown />

      <View style={{ flexDirection: "column", alignItems: "center" }}>
        <View>
          <Text style={style.textTwo}>Codigo/Authe: 8888888</Text>
        </View>

        <View>
          <Text style={style.textTwo}>Producto: 8888888</Text>
        </View>
      </View>

      <Pressable style={style.btnStyle}>
        <Text style={style.text}>Confirmar/Imprimir</Text>
      </Pressable>
    </View>
  );
};

const style = StyleSheet.create({
  FilterProdcuts: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
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
  },

  textTwo: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
    marginVertical: "30"
  },


});

export default CustomerNewOrders;
