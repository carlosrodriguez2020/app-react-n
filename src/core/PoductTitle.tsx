import React from 'react'
import { View, Text, StyleSheet } from "react-native";


const PoductTitle = () => {
    return (
        <View>
            <Text style={Style.titleText}>
                Lista de Productos
            </Text>
        </View>
    );
}
const Style = StyleSheet.create({

    titleText: {
        fontSize: 18,
        lineHeight: 21,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "Black",
    }

})
export default PoductTitle;