import React from "react";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../screens/RootStackPrams";

type CustomersScreemporp = NativeStackNavigationProp<RootStackParamList>



import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  SafeAreaView,
  Pressable
} from "react-native";
const Customers = () => {

  const navigation = useNavigation<CustomersScreemporp>()


  const languages = [
    { name: "Pascal", key: "1", provincia: "Jujuy", direccion: "Julio roca", localidad: "Salvador" },
    { name: "C", key: "2", provincia: "Jujuy", direccion: "Julio roca", localidad: "Salvador" },
    { name: "C+", key: "3", provincia: "Jujuy", direccion: "Julio roca", localidad: "Salvador" },
    { name: "Java", key: "4", provincia: "Jujuy", direccion: "Julio roca", localidad: "Salvador" },
    { name: "JavaScript", key: "5", provincia: "Jujuy", direccion: "Julio roca", localidad: "Salvador" },
    { name: "Go", key: "6", provincia: "Jujuy", direccion: "Julio roca", localidad: "Salvador" },
    { name: "Kotlin", key: "7", provincia: "Jujuy", direccion: "Julio roca", localidad: "Salvador" },
    { name: "Swift", key: "8", provincia: "Jujuy", direccion: "Julio roca", localidad: "Salvador" },
    { name: "Kotlin", key: "9", provincia: "Jujuy", direccion: "Julio roca", localidad: "Salvador" },
    { name: "Swift", key: "10", provincia: "Jujuy", direccion: "Julio roca", localidad: "Salvador" },
  ];

  return (
    <SafeAreaView>
      <FlatList
        data={languages}
        renderItem={({ item }) =>
          <View>
            <View style={{ width: "100%" }}>
              <Text style={style.item}>{item.name}</Text>
              <Text style={style.item}>{item.provincia}</Text>
              <Text style={style.item}>{item.localidad}</Text>
              <Text style={style.item}>{item.direccion}</Text>
            </View>

            <View>


              <Pressable style={style.btnStyle}
                onPress={() => navigation.navigate('Home')}
              >
                <Text style={style.text}>MENU</Text>
              </Pressable>

            </View>

          </View>

        }
      />
    </SafeAreaView>
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
  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   paddingTop: 20,
  //   // paddingHorizontal: 20,
  // },
  item: {
    marginTop: 2,
    padding: 10,
    backgroundColor: "gray",
    fontSize: 22,
    textAlign: "center",
    borderWidth: 1,
    color: "white",
    borderRadius: 10,
    width: "100%"

  },
});

export default Customers;
