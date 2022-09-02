import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../screens/RootStackPrams";

type homeScreemProps = NativeStackNavigationProp<RootStackParamList, 'Home'>

import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Image,
} from "react-native";

const Home = () => {

  const navigation = useNavigation<homeScreemProps>()
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Image
          source={require("../imgs/ypf.png")}
          style={{ width: 150, height: 150 }}
        />
      </View>

      <Pressable style={style.btnStyle}
        onPress={() => navigation.navigate('Pedidos')}
      >
        <Text style={style.text}>PEDIDOS de ENTREGA </Text>
      </Pressable>

      <Pressable style={style.btnStyle}
        onPress={() => navigation.navigate('Productos')}
      >
        <Text style={style.text}>MOSTRAR PRODUCTOS</Text>
      </Pressable>

      <Pressable style={style.btnStyle}
        onPress={() => navigation.navigate('Clientes')}
      >
        <Text style={style.text}>MOSTRAR CLIENTES</Text>
      </Pressable>

      <Pressable style={style.btnStyle}
        onPress={() => navigation.navigate('Stock')}
      >
        <Text style={style.text}>INGRESO de STOCK</Text>
      </Pressable>
    </View >
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
