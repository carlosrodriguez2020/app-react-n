import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, StyleSheet, TextInput, Pressable, FlatList } from "react-native";


import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../screens/RootStackPrams";
import OrdersTitle from "../../../core/OrdersTitle";
import { getDataOrders } from "../controllers/getDataOrders";



type odersScreemProp = NativeStackNavigationProp<RootStackParamList, 'Pedidos'>

interface Order {
  id: string;
  title: string;
  body: string;
  userId: number;
}

const Orders = () => {
  const [orderList, setOrderList] = useState<Order[]>([]);
  const [text, setText] = useState("");

  const navigation = useNavigation<odersScreemProp>()

  useEffect(() => {
    const api = async () => {
      const data = await getDataOrders()
      const resp = await data.json();

      setOrderList(resp);
    };
    api();
  }, []);
  return (
    <View>
      <OrdersTitle />
      <View>
        <SafeAreaView>
          <TextInput style={style.input} onChangeText={setText} value={text}
            placeholder={"Buscar Pedido"}
          />
        </SafeAreaView>
      </View>



      <FlatList
        data={orderList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={style.containerImputText}
          >
            <Text style={style.inputTextTitle}>
              Cliente:
            </Text>
            <Text
              style={style.inputText}
            >{item.title}
            </Text>
            <Text style={style.inputTextTitle}>
              Pedido:
            </Text>
            <Text
              style={style.inputText}
            >Detalle: {item.body}
            </Text>



            <View>
              <Pressable style={style.btnStyle}
                onPress={() => navigation.navigate('DetallesPedido')}
              >
                <Text style={style.text}>DETALLE</Text>
              </Pressable>
            </View>
          </View>
        )}
      />
    </View>
  );
};
const style = StyleSheet.create({
  containerImputText: {
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: `#dcdcdc`,
    marginTop: 10,
  },
  inputTextTitle: {
    fontSize: 18,
    marginTop: 5,
    fontWeight: 'bold',
    marginLeft: 10
  },
  inputText: {
    fontSize: 15,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5

  },
  input: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
    marginRight: 10,
    marginLeft: 10
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
});

export default Orders;
