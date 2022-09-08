import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../screens/RootStackPrams";
import ProductTitle from '../../../core/PoductTitle'


type productsScreemProp = NativeStackNavigationProp<RootStackParamList, 'Productos'>

import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Pressable,
  TextInput,
} from "react-native";
import { getDataProducts } from "../controllers/getDataPoducts";
import { ScrollView } from "react-native-gesture-handler";

interface CustomersList {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const Products = () => {
  const navigation = useNavigation<productsScreemProp>()

  const [result, setResult] = useState<CustomersList[]>([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const api = async () => {
      const data = await getDataProducts()
      const resp = await data.json();

      setResult(resp);

    };
    api();
  }, []);

  return (
    <View>
      <ProductTitle />
      <View>
        <SafeAreaView>
          <TextInput
            style={style.input}
            onChangeText={setText}
            value={text}
            placeholder="Buscar producto"
          />
        </SafeAreaView>
      </View>

      <View>

        <FlatList
          data={result}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View
              style={style.containerImputText}
            >
              <Text
                style={style.inputTextTitle}
              >
                Producto:
              </Text>
              <Text
                style={style.inputText}
              >
                {item.title}
              </Text>
              <Text
                style={style.inputTextTitle}
              >
                Detalle:
              </Text>
              <Text
                style={style.inputText}
              >
                {item.body}
              </Text>
            </View>
          )}
        />

      </View>
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
    marginBottom: 5
  },
  inputTextTitle: {
    fontSize: 18,
    marginTop: 5,
    fontWeight: 'bold',
    marginRight: 5,
    textAlign: "center"
  },
  inputText: {
    fontSize: 15,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    textAlign: "center",
    marginBottom: 5

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
  item: {
    margin: 10,
    padding: 10,
    backgroundColor: "#0056b3",
    fontSize: 18,
  },
});

export default Products;
