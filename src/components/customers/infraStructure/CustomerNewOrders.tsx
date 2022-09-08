import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import TitleCustomersOrders from "../../../core/TitleCustomersOrders";
import DropDown from "../../../core/DropDown";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../screens/RootStackPrams";
import TableCustomersOrder from "../../../core/TableCustomersOders";

type custoNewOrderScreemProp = NativeStackNavigationProp<RootStackParamList>

const CustomerNewOrders = () => {
  const [selected, setSelected] = useState<any>(undefined);

  const data = [
    { label: 'Nafta', value: '1' },
    { label: 'Diesel', value: '2' },
    { label: 'Nafta Premium', value: '3' },
    { label: 'Diesel Premium', value: '4' },
    { label: 'Agroquimicos', value: '5' },
  ];

  const navigation = useNavigation<custoNewOrderScreemProp>()

  return (
    <View style={{ padding: 20 }}>
      <TitleCustomersOrders />

      <View>
        <View style={{ flexDirection: "row" }}>
          <View style={style.drop}>
            {!!selected && (
              <Text style={style.textInfo}>
                Seleccionaste :
              </Text>
            )}
            <DropDown label="Productos" data={data} onSelect={setSelected} />
          </View>
        </View>
      </View>

      <Pressable style={style.btnStyle}
        onPress={() => alert('Disculpe, no disponible')}
      >
        <Text style={style.text}>Agregar Producto +</Text>
      </Pressable>

      <View
        style={{ flexDirection: "row" }}
      >
        <TableCustomersOrder />
      </View>

      <View style={{
        flexDirection: "row",
        justifyContent: "center"
      }}>
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
    paddingVertical: 10,
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
  drop: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  textInfo: {
    textAlign: "center",
    fontSize: 18,
    marginTop: 20
  },


});

export default CustomerNewOrders;
