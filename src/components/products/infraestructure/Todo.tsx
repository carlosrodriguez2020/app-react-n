import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import DropdownSpanish from '../../../core/DropDown';

import TableRN from '../../../core/TableRN';

interface DataTable {
    id: number
    producto: string,
    cantidad: string
}

const dataTable: DataTable[] = [
    { id: 1, producto: 'Nafta', cantidad: '88888' }

]

const dataDropDown = [
    { label: 'Nafta', value: '1' },
    { label: 'Diesel', value: '2' },
    { label: 'Nafta Premium', value: '3' },
    { label: 'Diesel Premium', value: '4' },
    { label: 'Agroquimicos', value: '5' },
];

const Todo = () => {
    const [selected, setSelected] = useState<any>(undefined)
    console.log(selected)


    return (

        <View style={{ flex: 1 }}>

            <DropdownSpanish label="Productos" data={dataDropDown} onSelect={setSelected} />

            <View style={{ flexDirection: "row" }}>

                <TableRN />

            </View>
        </View>

    );
}

export default Todo;