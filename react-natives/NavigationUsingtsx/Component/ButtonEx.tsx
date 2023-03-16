// import { Alert, Button, StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// //function calling is different
// //t handlePress = () => { how these function call is different
// //1.supppose i want pass msg though these function thesese way


// const ButtonEx = () => {
//     const handlePress = () => {
//         Alert.alert("Information!", "Welcome to react Native with Typescript")

//     }
//     return (
//         <View>
//             <View style={styles.button}>
//                 <Button title="Counter" color="green" onPress={handlePress} />
//             </View>

//         </View>
//     )
// }

// export default ButtonEx

// const styles = StyleSheet.create({

//     button: {
//         width: 200,
//         margin: 20,
//         alignSelf: "center",

//     }
// })




// import { Alert, Button, StyleSheet, Text, View } from 'react-native'
// import React, { useState } from 'react'

// //function calling is different
// //t handlePress = () => { how these function call is different
// //1.supppose i want pass msg though these function thesese way
// //  17 <Button title="Counter" color="green" onPress={handlePress("Information!", "Welcome to react Native with Typescript")} />
// //   <Button title="Counter" color="green" onPress={handlePress("Information!", "Welcome to react Native with Typescript")} />
// // we cant do like the above because it will call re render itself
// // state(0) means not using it

// const ButtonEx = () => {
//     // const [count, setCount] = useState<string>('') //we cam do like this
//     const [count, setCount] = useState<number>(0)
//     const counter = () => {
//         setCount((prevCount) => prevCount + 1);
//         setCount((prevCount) => prevCount + 1);
//         setCount((prevCount) => prevCount + 1);

//     }
//     const handlePress = (title: string, msg: string) => {

//         Alert.alert(title, msg);

//     }
//     return (
//         <View>
//             <View style={styles.button}>
//                 <Button title="Counter" color="green" onPress={counter} />
//             </View>
//             <Text style={styles.counter}>Counter: {count}</Text>
//         </View>
//     )
// }

// export default ButtonEx

// const styles = StyleSheet.create({

//     button: {
//         width: 200,
//         margin: 20,
//         alignSelf: "center",

//     },
//     counter: {
//         textAlign: "center",
//         fontSize: 30,


//     }
// })



import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

//function calling is different
//t handlePress = () => { how these function call is different
//1.supppose i want pass msg though these function thesese way
//  17 <Button title="Counter" color="green" onPress={handlePress("Information!", "Welcome to react Native with Typescript")} />
//   <Button title="Counter" color="green" onPress={handlePress("Information!", "Welcome to react Native with Typescript")} />
// we cant do like the above because it will call re render itself
// state(0) means not using it 

const ButtonEx = () => {
    // const [count, setCount] = useState<string>('') //we cam do like this
    const [count, setCount] = useState<number>(0)
    const counter = () => {
        setCount((prevCount) => prevCount + 1);
        setCount((prevCount) => prevCount + 1);
        setCount((prevCount) => prevCount + 1);

    }
    const handlePress = (title: string, msg: string) => {

        Alert.alert(title, msg);

    }
    return (
        <View>
            <View style={styles.button}>
                <Button title="Counter" color="green" onPress={counter} />
            </View>
            <Text style={styles.counter}>Counter: {count}</Text>
        </View>
    )
}

export default ButtonEx

const styles = StyleSheet.create({

    button: {
        width: 200,
        margin: 20,
        alignSelf: "center",

    },
    counter: {
        textAlign: "center",
        fontSize: 30,


    }
})



