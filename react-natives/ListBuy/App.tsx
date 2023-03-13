// import React from 'react';
// import Jsonobject from './listings-buy-data.json';
// import { Text, View, FlatList } from 'react-native';

// const getFullName = (
//   firstName: string,
//   secondName: string,
//   thirdName: string,
// ) => {
//   return firstName + ' ' + secondName + ' ' + thirdName;
// };

// const App = () => {
//   // console.warn(Jsonobject.data.listings.data)
//   const jData = Jsonobject.data.listings.data
//   // console.warn(Jsonobject.data.listings.data[0].carparks)
//   return (
//     <View>
//       <FlatList
//         data={jData}
//         renderItem={({ item }) => {
//           return (
//             <View>
//               <Text>Hello</Text>


//             </View>
//           )
//         }}
//       />


//     </View>
//   );
// };

// export default App;










import React from 'react';
import Jsonobject from './listings-buy-data.json';
import { Text, View, FlatList, Image } from 'react-native';

const getFullName = (
  firstName: string,
  secondName: string,
  thirdName: string,
) => {
  return firstName + ' ' + secondName + ' ' + thirdName;
};

const App = () => {
  // console.warn(Jsonobject.data.listings.data)
  const jData = Jsonobject.data.listings.data
  // console.warn(Jsonobject.data.listings.data[0].carparks)
  return (
    <View>
      <FlatList
        data={jData}
        renderItem={({ item, index }) => {
          return (
            <View>
              <Text>Hero Image</Text>
              <Image
                source={{
                  uri: `https://cdn.uatr.view.com.au/images/listing/slug/800-min/${item.heroImageUrl.split('/')[2]}`
                }}
                style={{ width: 200, height: 200 }}
              />


              <Text style={{ fontSize: 15 }}>Agents Photo</Text>
              {
                item.agents.map((agentItem: any, index: number) => {
                  return (

                    <Image
                      testID='agentImage'
                      key={'agentPhotoImage' + index}
                      style={{ height: 100, width: 100, marginTop: 5 }}
                      alt='agentPhotoImage'
                      source={{

                        uri: `https://cdn.uatr.view.com.au/images/listing/1000-w/${agentItem.agentPhotoFileName}`

                      }}
                    />

                  )
                })
              }


            </View>
          )
        }}
      />


    </View>
  );
};

export default App;
