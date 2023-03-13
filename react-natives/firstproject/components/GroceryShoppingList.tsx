import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, ScrollView, StyleSheet } from 'react-native';

const GroceryShoppingList = () => {
  const [groceryItems, setGroceryItems] = useState<string[]>([]);
  const [newItem, setNewItem] = useState('');


  const addItem = () => {
    setGroceryItems([...groceryItems, newItem]);
    setNewItem('');
  };

  return (

    <View style={styles.container}>
      <TextInput style={{ borderColor: 'black', borderWidth: 2, margin: 4 }}
        placeholder="Enter grocery item"
        value={newItem}
        onChangeText={setNewItem}
      />
      <Button title="Add the item to list" onPress={addItem} />
      <FlatList testID='flatlist'
        data={groceryItems}
        renderItem={({ item }) =>
          <Text style={styles.item}>{item}</Text>} />
    </View>

  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default GroceryShoppingList;
