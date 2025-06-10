import React from 'react';
import { View, Text, Image } from 'react-native';
import { topItemStyles } from './styles';

export default function TopItem({ item }) {
  return (
    <View style={topItemStyles.container}>
      <Text style={topItemStyles.title}>{item.title}</Text>
      <Image source={item.image} style={topItemStyles.image} />
      <Text style={topItemStyles.subHeader}>Ingredients:</Text>
      <Text style={topItemStyles.text}>{item.ingredients}</Text>
      <Text style={topItemStyles.subHeader}>Preparation:</Text>
      {item.preparation.map((step, index) => (
        <Text key={index} style={topItemStyles.text}>
          {index + 1}. {step}
        </Text>
      ))}
    </View>
  );
}