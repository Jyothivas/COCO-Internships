import React,{useState} from 'react';
import { View, Text,Button,TextInput, ScrollView ,StyleSheet} from 'react-native';



type ChildProps={
    navigation:any,
    AddUser: (name: string, email: string)=>void;
      
}

export const Login =(props:ChildProps)=> {
    // const navigation=useNavigation();

    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    
    const addingUser = () => {
        if(!name || !email){
            return
        }
       
        props.AddUser(name, email);
        props.navigation.navigate('Home')

        setName('');
        setEmail('');
    };
    
    return (
      <View  testID='loginScreen' style={style.mainView}>
        <Text style={style.loginStyle}>Login Screen</Text>
        <TextInput  style={style.inputFieldStyle} placeholder='Enter name' onChangeText={n=>setName(n)} />
        <TextInput style={style.inputFieldStyle} placeholder='Enter Email' onChangeText={n=>setEmail(n)} />
     
        <Button testID='LoginButton' title='login' onPress={addingUser} />
      </View>
    );
  } 

  const style = StyleSheet.create({

    mainView:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        margin:25 ,
        backgroundColor:'grey', 
        height:300,
        width:400,   
    },
    loginStyle:{
        fontSize:30, 
        color:'white',
        fontWeight:'bold'

    },
    inputFieldStyle:{
        borderColor:'blue', 
        backgroundColor:'skyblue',
        height:50, 
        width:200,
        margin:25 ,
        fontSize:20,
        borderRadius:10,
    },
   
    
  })