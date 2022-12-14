import React, { useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, TextInput, Pressable } from 'react-native';
import { Table } from 'react-native-table-component';
import DropdownSpanish from '../../../core/DropDown';
import DropDown from '../../../core/DropDown';
import OrderDetailTitle from '../../../core/OrderDetailTitle';
import TableRN from '../../../core/TableRN';
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
  const [selected, setSelected] = useState<any>(undefined);
  const data = [
    { label: 'Nafta', value: '1' },
    { label: 'Diesel', value: '2' },
    { label: 'Nafta Premium', value: '3' },
    { label: 'Diesel Premium', value: '4' },
    { label: 'Agroquimicos', value: '5' },
  ];


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
        <View style={{ flexDirection: "row" }}>
          <View style={style.drop}>
            {!!selected && (
              <Text style={style.textInfo}>
                Seleccionaste :
              </Text>
            )}
            <DropdownSpanish label="Productos" data={data} onSelect={setSelected} />
          </View>
        </View>
      </View>

      <View style={{ flexDirection: "row" }}>
        <TableRN />

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
})

export default OrderDetail;