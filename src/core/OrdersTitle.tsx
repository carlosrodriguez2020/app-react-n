import React from 'react'
import { View, Text, StyleSheet } from "react-native";


const OrdersTitle = () => {
    return (
        <View>
            <Text style={Style.titleText}>
                Pedidos Ingresados
            </Text>
        </View>
    );
}
const Style = StyleSheet.create({

    titleText: {
        fontSize: 20,
        lineHeight: 21,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "Black",
        margin: 10
    }

})
export default OrdersTitle;