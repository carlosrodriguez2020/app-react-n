import React, { useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, TextInput, Pressable, Alert } from 'react-native';
import DropDown from '../../../core/DropDown';
import OrderDetailTitle from '../../../core/OrderDetailTitle';
import { DtoOrder } from '../domain/DomainOrder';

const dtoOrder: DtoOrder = {
  nombre: '',
  fechas: '',
  idCliente: 0,
  direccion: '',
  localidad: '',
  provincia: '',
  EstadoPendiente: ''
}

const orderData: DtoOrder = {
  nombre: "Charly Brown",
  fechas: "30/08/2022",
  idCliente: 8888888,
  direccion: "Julio Roca",
  localidad: 'Ardiles',
  provincia: 'Santiago del Estero',
  EstadoPendiente: 'Entregado'
}

const OrderDetail = () => {
  const [text, setText] = useState("");


  return (
    <View>
      <OrderDetailTitle />

      <View style={style.containerData}>
        <Text style={style.textTitle}>Estado del Pedido:</Text>
        <Text style={style.textDataEstado}>{orderData.EstadoPendiente}</Text>
      </View>

      <View style={style.container}>

        <View style={style.containerData}>
          <Text style={style.textTitle}>Nombre:</Text>
          <Text style={style.textData}>{orderData.nombre}</Text>
        </View>

        <View style={style.containerData}>
          <Text style={style.textTitle}>Fecha:</Text>
          <Text style={style.textData}>{orderData.fechas}</Text>
        </View>

        <View style={style.containerData}>
          <Text style={style.textTitle}>IdCliente:</Text>
          <Text style={style.textData}>{orderData.idCliente}</Text>
        </View>

        <View style={style.containerData}>
          <Text style={style.textTitle}>Ciudad:</Text>
          <Text style={style.textData}>{orderData.localidad}</Text>
        </View>

        <View style={style.containerData}>
          <Text style={style.textTitle}>Provincia:</Text>
          <Text style={style.textData}>{orderData.provincia}</Text>
        </View>

        <View style={style.containerData}>
          <Text style={style.textTitle}>Direccion:</Text>
          <Text style={style.textData}>{orderData.direccion}</Text>
        </View>
      </View>
      <View>
        <View style={style.containerCondition}>
          <Text style={style.textGuide}>Producto</Text>
          <DropDown />
        </View>
        <View>

          <SafeAreaView>
            <TextInput style={style.input} onChangeText={setText} value={text}
              placeholder={"Ingresar Cantidad a Entregar"}
            />
          </SafeAreaView>

        </View>
        <View style={style.containerBalance}>
          <Text style={style.textBalace}>Pendiente:8888</Text>
        </View>
      </View>

      <Pressable style={style.btnStyle}
        onPress={() => alert("Disculpe, no disponible")}
      >
        <Text style={style.text}
        >CONFIRMAR</Text>
      </Pressable>


    </View >

  );
}
const style = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    margin: 5,
    backgroundColor: `#dcdcdc`,
  },
  containerData: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
  },
  textTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  textData: {
    fontSize: 18,
  },
  containerCondition: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center"
  },
  textGuide: {
    fontSize: 20,
  },
  textDataEstado: {
    fontSize: 20,
    alignContent: "center",
    alignItems: "center",
    fontWeight: 'bold'
  },
  input: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    marginRight: 10,
    marginLeft: 10,
    fontSize: 25,
    textAlign: "center"


  },
  containerBalance: {
    borderColor: "gray",

    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: `#dcdcdc`,
  },
  textBalace: {
    fontSize: 25,
    textAlign: "center",
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



})

export default OrderDetail;