import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { AppContext } from './AppContext';
import { appStyles } from './styles';

const imageOptions = ['pizza.jpg', 'burger.jpg', 'pasta.jpeg', 'salad.jpg', 'icecream.jpg', 'taco.jpg'];

export default function EditScreen() {
  const { items, updateItem } = useContext(AppContext);
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  const [formData, setFormData] = useState({
    ...items[0],
    preparation: Array.isArray(items[0].preparation)
      ? items[0].preparation.join('\n')
      : (items[0].preparation || ''),
  });

  useEffect(() => {
    const selected = items[selectedItemIndex];
    setFormData({
      ...selected,
      preparation: Array.isArray(selected.preparation)
        ? selected.preparation.join('\n')
        : (selected.preparation || ''),
    });
  }, [selectedItemIndex]);

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSave = () => {
    const updated = {
      ...formData,
      preparation: typeof formData.preparation === 'string'
        ? formData.preparation.split('\n')
        : [],
    };
    updateItem(selectedItemIndex, updated);
  };

  return (
    <View style={appStyles.container}>
      <Text style={appStyles.header}>Edit Recipe</Text>

      <Picker
        selectedValue={selectedItemIndex}
        onValueChange={(value) => setSelectedItemIndex(value)}
      >
        {[0, 1, 2].map((index) => (
          <Picker.Item label={`Item ${index + 1}`} value={index} key={index} />
        ))}
      </Picker>

      <TextInput
        placeholder="Title"
        value={formData.title}
        onChangeText={(text) => handleChange('title', text)}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />

      <TextInput
        placeholder="Ingredients"
        value={formData.ingredients}
        onChangeText={(text) => handleChange('ingredients', text)}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />

      <TextInput
        placeholder="Preparation (newline separated)"
        value={formData.preparation}
        onChangeText={(text) => handleChange('preparation', text)}
        multiline
        numberOfLines={4}
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />

      <Picker
        selectedValue={formData.imageName}
        onValueChange={(value) => handleChange('imageName', value)}
      >
        {imageOptions.map((name) => (
          <Picker.Item label={name} value={name} key={name} />
        ))}
      </Picker>

      <Button title="Save" onPress={handleSave} />
    </View>
  );
}