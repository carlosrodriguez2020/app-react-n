import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, StyleSheet, TextInput, Pressable, FlatList } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../screens/RootStackPrams";

type odersScreemProp = NativeStackNavigationProp<RootStackParamList>

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
      const data = await fetch(
        "https://jsonplaceholder.typicode.com/users/1/posts",
        {
          method: "GET",
        }
      );
      const resp = await data.json();
      console.log(resp);

      setOrderList(resp);

      setTimeout(() => {
        console.log(orderList);
      }, 100);
    };
    api();
  }, []);
  return (
    <View>
      <View >
        <SafeAreaView>
          <TextInput style={style.input} onChangeText={setText} value={text} />
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
              Detalle:
            </Text>
            <Text
              style={style.inputText}
            >Detalle: {item.body}
            </Text>



            <View>
              <Pressable style={style.btnStyle}
                onPress={() => navigation.navigate('OrderDetail')}
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
    marginRight: 5
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

export default Orders;
