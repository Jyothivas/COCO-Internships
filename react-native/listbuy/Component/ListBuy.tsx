import React, { useState, useEffect } from 'react'
import { Image, Text, View, FlatList } from 'react-native'
import jsonData from '../listings-buy-data.json'


interface jssonObject {

  heroImageUrl?: string | null;
  propertyTypes?: string | null;

  agents?: (AgentsEntity | null)[] | null;

}
interface AgentsEntity {

  agentPhotoFileName?: string | null;

}

const ListBuy = () => {

  const [jObject, setJobject] = useState<jssonObject[]>()

  const fetchData = () => {

    const jsonObjectData = jsonData.data.listings.data;
    console.log(jsonObjectData);
    console.warn(jsonObjectData)
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (

    <View testID='mainContent'>
      <Text testID='textHeading'>List buy component</Text>
      <FlatList
        data={jObject}

        renderItem={(item: any) => (
          <View>
            <Text>PropertyTypes:{item.propertyTypes}</Text>
          </View>
        )}
      />



    </View>
  )
}


export default ListBuy


