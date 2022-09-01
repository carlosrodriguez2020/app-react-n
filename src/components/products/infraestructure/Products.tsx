import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../screens/RootStackPrams";

type productsScreemProp = NativeStackNavigationProp<RootStackParamList, 'Products'>

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
      const data = await fetch(
        "https://jsonplaceholder.typicode.com/users/1/posts",
        {
          method: "GET",
        }
      );
      const resp = await data.json();

      setResult(resp);
      console.log(resp);
    };
    api();
  }, []);

  return (
    <View style={styles.containerTwo}>
      <View>
        <SafeAreaView>
          <TextInput
            style={styles.input}
            onChangeText={setText}
            value={text}
            placeholder="Buscar producto"
          />
        </SafeAreaView>
      </View>

      <View style={{ padding: 5 }}>
        <FlatList
          data={result}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={{ flexDirection: "column", justifyContent: "center" }}>
              <Text style={styles.inputText}>Producto: {item.title}</Text>
              {/* <Text style={styles.inputText}>Detalle: {item.body}</Text> */}

              <View>
                <Pressable style={styles.btnStyle}>
                  <Text style={styles.text}>VER MAS</Text>
                </Pressable>
              </View>
            </View>
          )}
        />
      </View>
      <Pressable
        onPress={() => navigation.navigate('Home')}
        style={styles.btnStyle}>
        <Text style={styles.text}>MENU</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  containerTwo: {
    maxHeight: "90%",
    paddingHorizontal: 20,
    maxWidth: "90%",
  },
  inputText: {
    width: "100%",
    textAlign: "center",
  },

  // container: {
  //   // marginTop: StatusBar.currentHeight || 0

  //   padding: 10,
  //   flexDirection: "column",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  input: {
    borderColor: "gray",
    width: "80%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 50,
  },
  btnStyle: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    paddingHorizontal: 15,
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
