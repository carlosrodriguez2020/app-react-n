import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../screens/RootStackPrams";
import StockTitle from '../../../core/StockTitle';
import DropdownSpanish from '../../../core/DropdownSpanish';
import TableRN from '../../../core/TableRN';


type stockScrollScreem = NativeStackNavigationProp<RootStackParamList, 'Stock'>


const Stock = () => {
  const [text, setText] = useState("");
  const [selected, setSelected] = useState<any>(undefined);

  const data = [
    { label: 'Nafta', value: '1' },
    { label: 'Diesel', value: '2' },
    { label: 'Nafta Premium', value: '3' },
    { label: 'Diesel Premium', value: '4' },
    { label: 'Agroquimicos', value: '5' },
  ];



  const navigation = useNavigation<stockScrollScreem>()

  return (
    <View>
      <StockTitle />

      <View>
        <View style={{ flexDirection: "row" }}>
          <View style={style.drop}>
            {!!selected && (
              <Text style={style.textInfo}>
                Seleccionaste :
              </Text>
            )}
            <DropdownSpanish label="Productos" data={data} onSelect={setSelected} />
          </View>

          <View style={style.data}>
            <View style={style.containerTextTwo}>
              <Text style={style.textTwoTitle}>Stock Disponible: </Text>
              <Text style={style.textTwo}>8888888</Text>
            </View>
          </View>
        </View>

        <Text style={style.textInfo}>
          ¿Solicitar mas?
        </Text>

        <View >
          <SafeAreaView>
            <TextInput style={style.input} onChangeText={setText} value={text}
              keyboardType="number-pad"
              placeholder={"Ingrese su cantidad"}
            />

          </SafeAreaView>
        </View>

      </View>

      <Pressable style={style.btnStyle}
        onPress={() => alert('Disculpe, no disponible')}

      >
        <Text style={style.text}>AGREGAR PRODUCTO</Text>
      </Pressable>
      <View
        style={{ flexDirection: "row" }}
      >
        <TableRN />
      </View>
      <Pressable style={style.btnStyle}
        onPress={() => alert('Disculpe, no disponible')}
      >
        <Text style={style.text}

        >CONFIRMAR</Text>
      </Pressable>


    </View>
  );
}
const style = StyleSheet.create({
  textInfo: {
    textAlign: "center",
    fontSize: 18,
    marginTop: 20
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
    marginRight: 10,
    marginLeft: 10,
    textAlign: "center",
    fontSize: 20
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
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",

  },
  containerTextTwo: {
    flexDirection: "column",
    textAlign: "center",
    flexWrap: "wrap"
  },
  data: {
    borderRadius: 10,
    backgroundColor: '#fff',
    flexDirection: "column",
    alignItems: "center",
    marginRight: 10,
    marginLeft: 10
  },
  textTwoTitle: {
    fontSize: 18,

    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
    margin: 15
  },

  textTwo: {
    fontSize: 18,
    textAlign: "center",
    letterSpacing: 0.25,
    color: "black",
    margin: 10
  },
  drop: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',

  },
})

export default Stock;