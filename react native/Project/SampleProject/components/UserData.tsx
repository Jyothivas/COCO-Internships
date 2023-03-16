import React from "react";
import { FlatList, StyleSheet, Text, View } from 'react-native';

type ParentProps = {
    UserData: any,
}

const UserData = (props: ParentProps) => {

    return (
        <View testID="table">
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
                data={props.UserData}
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

export default UserData;