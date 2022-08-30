import React from "react";

import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  Image,
} from "react-native";

const Home = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <View>
        <Image
          source={require("../imgs/ypf.png")}
          style={{ width: 100, height: 100 }}
        />
      </View>

      <Pressable style={style.btnStyle}>
        <Text style={style.text}>PEDIDOS de ENTREGA </Text>
      </Pressable>
      <Pressable style={style.btnStyle}>
        <Text style={style.text}>MOSTRAR PRODUCTOS</Text>
      </Pressable>
      <Pressable style={style.btnStyle}>
        <Text style={style.text}>MOSTRAR CLIENTES</Text>
      </Pressable>
      <Pressable style={style.btnStyle}>
        <Text style={style.text}>INGRESO </Text>
      </Pressable>
    </View>
  );
};

const style = StyleSheet.create({
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
  img: {
    justifyContent: "center",
    marginBottom: 50,
    width: 50,
    height: 50,
  },
  text: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default Home;
