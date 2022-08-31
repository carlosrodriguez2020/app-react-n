import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, StyleSheet, TextInput } from "react-native";

interface Order {
  id: string;
  title: string;
  body: string;
  userId: number;
}

const Orders = () => {
  const [orderList, setOrderList] = useState<Order[]>([]);
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
      <View>
        <SafeAreaView>
          <TextInput style={styles.input} onChangeText={setText} value={text} />
        </SafeAreaView>
      </View>

      {/* <View>
        <FileList 
        data={orderList}
        
        
        /> */}

      {/* </View> */}
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Orders;
