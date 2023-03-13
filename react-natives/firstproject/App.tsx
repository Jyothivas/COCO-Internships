import { Image, Text, View } from "react-native";
import GroceryShoppingList from "./components/GroceryShoppingList";

function App() {

  return (
    <>
      <View>
        <Text>Some Text </Text>
        <Text>Hello, World!</Text>
        <Text>Some more text</Text>
        <Image
          testID="cat-image"
          source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png' }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <GroceryShoppingList />
    </>
  );
}

export default App;
