import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../screens/RootStackPrams";
import StockTitle from '../../../core/StockTitle';
import DropDown from '../../../core/DropDown';
import { DataTable } from 'react-native-paper';


type stockScrollScreem = NativeStackNavigationProp<RootStackParamList, 'Stock'>


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
                onPress={() => alert('Disculpe, no disponible')}

            >
                <Text style={style.text}>AGREGAR PRODUCTO</Text>
            </Pressable>

            <View style={style.table}>
                <DataTable >
                    <DataTable.Header>
                        <DataTable.Title
                        >Agregaste
                        </DataTable.Title>
                    </DataTable.Header>

                    <DataTable.Row>
                        <DataTable.Cell>1</DataTable.Cell>
                        <DataTable.Cell>Nafta</DataTable.Cell>
                        <DataTable.Cell numeric>88888</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                        <DataTable.Cell>2</DataTable.Cell>
                        <DataTable.Cell>Agroquimicos</DataTable.Cell>
                        <DataTable.Cell numeric>888888</DataTable.Cell>
                    </DataTable.Row>

                </DataTable>
            </View>

            <Pressable style={style.btnStyle}
                onPress={() => alert('Disculpe, no disponible')}
            >
                <Text style={style.text}

                >CONFIRMAR</Text>
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
        paddingVertical: 10,
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
    table: {
        backgroundColor: `#dcdcdc`,
        borderRadius: 10,
        fontSize: 20,
        paddingHorizontal: 32,
        marginRight: 10,
        marginLeft: 10
    }
})

export default Stock;