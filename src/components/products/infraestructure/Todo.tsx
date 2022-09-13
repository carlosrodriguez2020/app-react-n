import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Pressable, TextInput } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import DropdownSpanish from '../../../core/DropDown';

import TableRN from '../../../core/TableRN';

interface DataTable {
    id: number
    producto: string,
    cantidad: string
}



const dataDropDown = [
    { label: 'Nafta', value: '1' },
    { label: 'Diesel', value: '2' },
    { label: 'Nafta Premium', value: '3' },
    { label: 'Diesel Premium', value: '4' },
    { label: 'Agroquimicos', value: '5' },
];

const Todo = () => {
    const [selected, setSelected] = useState<any>(undefined)
    const [text, setText] = useState("");
    console.log(selected)
    console.log(text)

    const dataTable: DataTable[] = [
        { id: 1, producto: 'Nafta', cantidad: '88888' }

    ]

    const showTablet = () => {

    }

    return (

        <View style={{ flex: 1 }}>

            <DropdownSpanish label="Productos" data={dataDropDown} onSelect={setSelected} />
            <View >
                <SafeAreaView>
                    <TextInput style={style.input} onChangeText={setText} value={text}
                        keyboardType="number-pad"
                        placeholder={"Ingrese su cantidad"}
                    />

                </SafeAreaView>
            </View>

            <View style={{ flexDirection: "row" }}>

                <TableRN />

            </View>

            <Pressable style={style.btnStyle}
                onPress={showTablet}

            >
                <Text style={style.text}>AGREGAR PRODUCTO</Text>
            </Pressable>


        </View>

    );
}
const style = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginTop: 20,
        marginBottom: 20,
        marginRight: 10,
        marginLeft: 10,
        textAlign: "center",
        fontSize: 20
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
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "white",

    },
})

export default Todo;