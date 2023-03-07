import React, { useState, FC } from 'react'
import { FlatList, View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
interface FormListType {
  navigation: any,
  route: any

}
interface user {
  name: string,
  email: string,

}

const FormList: FC<FormListType> = (props) => {
  const [names] = useState<user[]>(props.route.params.item)
  return (
    <View>

      <FlatList testID='flatlist'
        data={names}
        renderItem={({ item, index }) => {
          return (

            <View testID='card-details' style={styles.box}>
              <Text style={styles.count}>{index + 1}.</Text>
              <View style={{ padding: 10 }}>
                <Text style={styles.name}>{item.name}
                </Text>
                <Text
                  style={styles.name}
                >{item.email}</Text>
              </View>

            </View>



          )
        }}
        ListHeaderComponent={
          <View style={styles.container}>
            <View style={styles.view}>
              <Text style={styles.text}>Names</Text>


              <Text
                style={styles.text1}>{names.length}</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                props.navigation.goBack('')
              }}>
              <Image
                source={require("../Images/add.png")} style={{ tintColor: 'blue', width: 50, height: 50, resizeMode: 'contain', }}
              />
            </TouchableOpacity>
          </View>
        }
      />




    </View>

  );
}

export default FormList

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    alignSelf: 'center',
    marginBottom: 10,
  },
  view: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text: {
    color: 'black',
    fontSize: 15,
  },
  text1: {
    color: 'white',
    fontSize: 15,
    backgroundColor: 'blue',
    borderRadius: 30,
    padding: 10,
    marginLeft: '5%'
  },
  box: {
    shadowColor: '#000',
    flexDirection: 'row',
    margin: 5,
    alignItems: 'center',
    paddingLeft: '5%',
    borderRadius: 7,
    elevation: 10,
    backgroundColor: 'white'

  },
  count: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingRight: 20
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  }
})
