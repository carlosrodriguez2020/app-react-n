import React from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
const Customers = () => {
  const languages = [
    { name: "Pascal", key: "1" },
    { name: "C", key: "2" },
    { name: "C++", key: "3" },
    { name: "Java", key: "4" },
    { name: "JavaScript", key: "5" },
    { name: "Go", key: "6" },
    { name: "Kotlin", key: "7" },
    { name: "Swift", key: "8" },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={languages}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />
    </View>

    // <View style={styles.container}>
    //   <ScrollView>
    //     {languages.map((lang) => (
    //       <View key={lang.key}>
    //         <Text style={styles.item}>{lang.name}</Text>
    //       </View>
    //     ))}
    //   </ScrollView>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    // paddingHorizontal: 20,
  },
  item: {
    marginTop: 20,
    padding: 30,
    backgroundColor: "#ffc600",
    fontSize: 24,
  },
});

export default Customers;
