import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, TextInput } from 'react-native';

interface CustomersList {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const CustomerList = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState<CustomersList[]>([])

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
      console.log(result);
    };
    api();
  }, []);


  return (
    <View>
      <SafeAreaView>
        <TextInput
          style={{ borderWidth: 1, height: 50, textAlign: "center" }}
          onChangeText={setText}
          value={text}
          placeholder="Buscar producto"
        />
      </SafeAreaView>

    </View>

  )
}

export default CustomerList;