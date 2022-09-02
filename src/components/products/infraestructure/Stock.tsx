import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, SafeAreaView, TextInput } from 'react-native';

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../screens/RootStackPrams";
import StockTitle from '../../../core/StockTitle';
import DropDown from '../../../core/DropDown';

type stockScrollScreem = NativeStackNavigationProp<RootStackParamList>


const Stock = () => {
    const [text, setText] = useState("");
    const navigation = useNavigation<stockScrollScreem>()

    return (
        <View>
            <StockTitle />


            <View>
                <Text style={style.textInfo}>
                    Selecionar Producto
                </Text>
                <DropDown />


                <View style={style.data}>
                    <View style={style.containerTextTwo}>
                        <Text style={style.textTwoTitle}>Stock Disponible: </Text>
                        <Text style={style.textTwo}>8888888</Text>
                    </View>


                </View>

                <Text style={style.textInfo}>
                    ¿Solicitar mas?
                </Text>


                <View>
                    <SafeAreaView>
                        <TextInput style={style.input} onChangeText={setText} value={text}
                            placeholder={"Ingrese su cantidad"}
                        />

                    </SafeAreaView>
                </View>

            </View>

            <Pressable style={style.btnStyle}
                onPress={() => navigation.navigate('CustomerNewOrders')}

            >
                <Text style={style.text}>NUEVO PEDIDO</Text>
            </Pressable>


            <Pressable style={style.btnStyle}
                onPress={() => navigation.navigate('CustomerNewOrders')}

            >
                <Text style={style.text}>CONFIRMAR/ENVIAR</Text>
            </Pressable>
        </View>
    );
}
const style = StyleSheet.create({
    textInfo: {
        textAlign: "center",
        fontSize: 22,
        marginTop: 20

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
    containerTextTwo: {
        flexDirection: "row",
        textAlign: "center",
        flexWrap: "wrap"
    },
    data: {
        borderRadius: 10,
        backgroundColor: `#dcdcdc`,
        flexDirection: "column", alignItems: "center",
        marginRight: 10,
        marginLeft: 10
    },
    textTwoTitle: {
        fontSize: 20,
        lineHeight: 21,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "black",
        margin: 15
    },

    textTwo: {
        fontSize: 20,
        lineHeight: 21,
        letterSpacing: 0.25,
        color: "black",
        margin: 15
    },
})

export default Stock;