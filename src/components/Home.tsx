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
    <View>
      <View>
        <Image
          source={{
            uri: "https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c325.png",
          }}
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
        <Text style={style.text}>INGRESO STOCK</Text>
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
  text: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default Home;
