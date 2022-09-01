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
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginVertical: 20

  }
})

export default DropDown;