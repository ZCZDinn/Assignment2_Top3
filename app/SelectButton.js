import React from 'react';
import { Pressable, Text } from 'react-native';
import { selectButtonStyles } from './styles';

export default function SelectButton({ number, isSelected, onPress }) {
  return (
    <Pressable
      style={[
        selectButtonStyles.button,
        isSelected ? selectButtonStyles.selected : selectButtonStyles.unselected,
      ]}
      onPress={onPress}
    >
      <Text style={selectButtonStyles.buttonText}>{number}</Text>
    </Pressable>
  );
}