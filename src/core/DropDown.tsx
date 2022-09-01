import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
const DropDown = () => {

  const Productos = ["Nafta", "Nafta Premium", "Diesel", "Diesel Premium", "Agroquimicos", "Otros"]
  return (
    <View
      style={style.containerDrop}

    >
      <SelectDropdown
        data={Productos}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index)
        }}
        buttonTextAfterSelection={(selectedItem, index) => {

          return selectedItem
        }}
        rowTextForSelection={(item, index) => {

          return item
        }}
      />
    </View>

  );
}
const style = StyleSheet.create({
  containerDrop: {
    alignItems: 'center',
    margin: 20,
    borderWidth: 2,
    fontSize: 30,
    fontWeight: "bold",
    borderRadius: 10,
    padding: 5



  }
})

export default DropDown;