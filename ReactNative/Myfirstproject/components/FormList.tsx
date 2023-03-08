import React from "react";
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

type ParentProps = {
    formlistdata: any,
}

const FormList = (props: ParentProps) => {

    const navigation = useNavigation();
    const gotoFormScreen = () => {
        navigation.navigate('User Form');
    }

    return (
        <View testID="table">
            <Button title="Create User" onPress={gotoFormScreen} />
            <View testID='headingRow' style={style.tableHeader}>
                <View style={{ flex: 1 }}>
                    <Text style={style.rowData}>Sr.No</Text>
                </View>
                <View style={{ flex: 2 }}>
                    <Text style={style.rowData}>Name</Text>
                </View>
                <View style={{ flex: 3 }}>
                    <Text style={style.rowData}>Email</Text>
                </View>
            </View>

            <FlatList testID='flatlist'
                data={props.formlistdata}
                renderItem={({ item, index }) =>
                    <View style={style.table}>
                        <View style={{ flex: 1 }}>
                            <Text style={style.rowData}>{index + 1}</Text>
                        </View>
                        <View style={{ flex: 2 }}>
                            <Text style={style.rowData}>{item.name}</Text>
                        </View>
                        <View style={{ flex: 3 }}>
                            <Text style={style.rowData}>{item.email}</Text>
                        </View>
                    </View>
                } />
        </View>
    );
}

const style = StyleSheet.create({

    rowData: {
        fontSize: 18,
        color: 'black',
        alignSelf: 'center'
    },
    table: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 20,
        padding: 5,
        borderBottomWidth: 1
    },
    tableHeader: {
        fontSize: 20,
        flexDirection: 'row',
        backgroundColor: 'lightgrey',
        padding: 10,
        top: 10,
        borderColor: 'black',
        borderBottomWidth: 1,
        borderTopWidth: 1
    },
})

export default FormList;