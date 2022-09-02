import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import TitleCustomersOrders from "../../../core/TitleCustomersOrders";
import { RadioButton } from "react-native-paper";
import DropDown from "../../../core/DropDown";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../screens/RootStackPrams";

type custoNewOrderScreemProp = NativeStackNavigationProp<RootStackParamList>

const CustomerNewOrders = () => {

  const navigation = useNavigation<custoNewOrderScreemProp>()

  const [checked, setChecked] = React.useState("");

  return (
    <View style={{ padding: 20 }}>
      <TitleCustomersOrders />

      <Pressable style={style.btnStyle}
        onPress={() => alert('Disculpe, no disponible')}
      >
        <Text style={style.text}>Agregar Producto +</Text>
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

      <View style={{
        flexDirection: "row",
        justifyContent: "center"
      }}>

        <View style={style.data}>
          <View style={style.containerTextTwo}>
            <Text style={style.textTwoTitle}>Codigo/Authe: </Text>
            <Text style={style.textTwo}>8888888</Text>
          </View>

          <View style={style.containerTextTwo}>
            <Text style={style.textTwoTitle}>Producto: </Text>
            <Text style={style.textTwo}>8888888</Text>
          </View>
        </View>
      </View>

      <Pressable style={style.btnStyle}
        onPress={() => alert('Disculpe, no disponible')}
      >
        <Text style={style.text}>Confirmar/Imprimir</Text>
      </Pressable>
    </View>
  );
};

const style = StyleSheet.create({
  containerTextTwo: {
    flexDirection: "row",
    textAlign: "center",
    flexWrap: "wrap"
  },
  data: {
    borderRadius: 10,
    backgroundColor: `#dcdcdc`,
    flexDirection: "column",
    alignItems: "center",
  },
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
  textTwoTitle: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
    margin: 15
  },

  textTwo: {
    fontSize: 20,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "black",
    margin: 15
  },


});

export default CustomerNewOrders;
