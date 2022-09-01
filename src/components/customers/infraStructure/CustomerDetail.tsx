import React from "react";
import { Text, View, Pressable, StyleSheet } from "react-native";
import { DtoClient } from "../domain/ClientDto";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../screens/RootStackPrams";
import DetailClientTitle from "../../../core/DetailClientTitle";

type customerDetailScreem = NativeStackNavigationProp<RootStackParamList>

const CustomerDetail = () => {

  const navigation = useNavigation<customerDetailScreem>()
  const dto: DtoClient = {
    nombre: "",
    idCliente: 0,
    direccion: "",
    localidad: "",
    provincia: "",

  };

  const client: DtoClient = {
    nombre: "Carlos M. Rodriguez",
    idCliente: 0,
    direccion: "123",
    localidad: "S. M. de Tucuman",
    provincia: "Tucuman",
    condicionIVA: "RI",
    observaciones: "Tiene que empezar el gimnacio"
  };

  return (
    <View >
      <DetailClientTitle />

      <View style={style.container}>
        <View style={style.containerData}>

          <Text style={style.textTitle}>Nombre:</Text>
          <Text style={style.textData}>{client.nombre}</Text>
        </View>
        <View style={style.containerData}>

          <Text style={style.textTitle}>Ciudad:</Text>
          <Text style={style.textData}>{client.localidad}</Text>
        </View>
        <View style={style.containerData}>

          <Text style={style.textTitle}>Provincia:</Text>
          <Text style={style.textData}>{client.provincia}</Text>
        </View>
        <View style={style.containerData}>

          <Text style={style.textTitle}>Direccion:</Text>
          <Text style={style.textData}>{client.direccion}</Text>
        </View>
        <View style={style.containerData}>

          <Text style={style.textTitle}>IdCliente:</Text>
          <Text style={style.textData}>{client.idCliente}</Text>
        </View>
        <View style={style.containerData}>

          <Text style={style.textTitle}>CondicionesIVA:</Text>
          <Text style={style.textData}>{client.condicionIVA}</Text>
        </View>
        <View style={style.containerData}>

          <Text style={style.textTitle}>Observaciones:</Text>
          <Text style={style.textData}>{client.observaciones}</Text>
        </View>
      </View>



      <Pressable style={style.btnStyle}
        onPress={() => navigation.navigate('CustomerNewOrders')}

      >
        <Text style={style.text}>NUEVO PEDIDO</Text>
      </Pressable>

    </View>
  );
};
const style = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    margin: 5,
    padding: 5,
    backgroundColor: `#dcdcdc`,
  },
  containerData: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  textData: {
    fontSize: 20,
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
});

export default CustomerDetail;
