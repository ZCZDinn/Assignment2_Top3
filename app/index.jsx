import React, { useState, useContext } from 'react';
import { View, Text } from 'react-native';
import { AppContext } from './AppContext';
import TopItem from '../_components/TopItem';
import SelectButton from '../_components/SelectButton';
import { appStyles } from './styles';

export default function ViewScreen() {
  const { items } = useContext(AppContext);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <View style={appStyles.container}>
      <Text style={appStyles.header}>Top 3 Recipes</Text>
      <TopItem item={items[selectedIndex]} />
      <View style={appStyles.buttonRow}>
        {[0, 1, 2].map((index) => (
          <SelectButton
            key={index}
            number={index + 1}
            isSelected={selectedIndex === index}
            onPress={() => setSelectedIndex(index)}
          />
        ))}
      </View>
    </View>
  );
}
