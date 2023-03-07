import React, {useState, FC} from 'react'
import { FlatList, View, Text, TouchableOpacity, Image } from "react-native";
interface FormListType{
    navigation:any,
    route:any
  
}
interface user{
  name:string,
  email:string,
}

const FormList:FC<FormListType> = (props) => {
const [names]=useState <user[]>(props.route.params.item)
  return (
    <View>
       
   <FlatList
  data={names}
  renderItem={({item})=>{
    return(
      <View>
       <Text
        style={{ marginTop:5,paddingBottom:10, color:'black', fontSize:15, borderBottomWidth:1, borderColor:'black', width:'95%', alignSelf:'center'}}
       
       >{item.name}</Text>
       {/* <Text
        style={{ marginTop:5,paddingBottom:10, color:'black', fontSize:15, borderBottomWidth:1, borderColor:'black', width:'95%', alignSelf:'center'}}
       
       >{item.email}</Text>  */}
       </View>


    )
  }}
  ListHeaderComponent={<View style={{marginTop:20,alignItems:'center',flexDirection:'row', justifyContent:'space-between', width:'95%', alignSelf:'center'}}>
    <View style={{alignItems:'center',flexDirection:'row', justifyContent:'space-between'}}>
        <Text style={{color:'black', fontSize:15, }}>Names</Text>
      
      
        <Text  
        style={{color:'white', fontSize:15, backgroundColor:'blue', borderRadius:30, padding:10, 
        marginLeft:'5%'
    
    }}>{names.length}</Text>
    </View>
     <TouchableOpacity 
     onPress={()=>{
        props.navigation. goBack('')
     }}>
        <Image
        source={require("../Images/add.png")} style={{tintColor:'blue',width:50, height:50,resizeMode:'contain', }}
        />
     </TouchableOpacity>
  </View>}

   />


    </View>
    
  );
}

export default FormList
