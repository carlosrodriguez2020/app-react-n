import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


interface DataTable {
    id: number
    producto: string,
    cantidad: string
}

const dataTable: DataTable[] = [
    { id: 1, producto: 'Nafta', cantidad: '88888' },
    { id: 2, producto: 'Nafta Premiumn', cantidad: '88888' },
    { id: 3, producto: 'Diesel', cantidad: '88888' },
    { id: 4, producto: 'Diesel Premiumn', cantidad: '88888' },
    { id: 5, producto: 'Agroquimicos', cantidad: '88888' },
]
const TableRN = () => {

    const item = ({ item }: any) => {
        return (
            <View style={{ flexDirection: "row", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                <View style={{ width: "20%" }}>
                    <Text style={style.textTable}>
                        {item.id}
                    </Text>
                </View>

                <View style={{ width: "40%" }}>
                    <Text style={style.textTable}>
                        {item.producto}
                    </Text>
                </View>
                <View style={{ width: "30%" }}>
                    <Text style={style.textTable}>
                        {item.cantidad}
                    </Text>
                </View>
            </View>
        )

    }


    return (
        <View style={{ flex: 1, justifyContent: "center", alignContent: "center", alignItems: "center", marginTop: 10 }}>
            <View style={{ flexDirection: "row" }}>
                <View style={style.containerTitleTable}>
                    <Text style={style.titleTable}>
                        Id
                    </Text>
                </View>

                <View style={style.containerTitleTable}>
                    <Text style={style.titleTable}>
                        Producto
                    </Text>
                </View>
                <View style={style.containerTitleTable}>
                    <Text style={style.titleTable}>
                        Cantidad
                    </Text>
                </View>
            </View>
            <FlatList
                data={dataTable}
                renderItem={item}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}
const style = StyleSheet.create({
    containerTitleTable: {
        width: 100,
        backgroundColor: "#0056b3",
    },
    titleTable: {
        textAlign: "center",
        fontSize: 20,
        color: "white"
    },
    textTable: {
        textAlign: "center",
        fontSize: 18,

    }

})

export default TableRN;