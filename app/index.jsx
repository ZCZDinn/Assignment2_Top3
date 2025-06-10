import React, { useState } from 'react';
import { View, Text } from 'react-native';
import TopItem from './TopItem';
import SelectButton from './SelectButton';
import { appStyles } from './styles';

export default function App() {
  const topItems = [
    {
      title: 'Pizza',
      image: require('../assets/images/pizza.jpg'),
      ingredients: 'Pizza dough, tomato sauce, fresh mozzarella, pepperoni.',
      preparation: [
        'Roll dough flat on pizza stone.',
        'Add sauce, cheese, and toppings and cook in oven.',
      ],
    },
    {
      title: 'Burger',
      image: require('../assets/images/burger.jpg'),
      ingredients: 'Buns, beef patty, lettuce, red onion, pickles, cheese, chipotle sauce.',
      preparation: [
        'Grill beef patty.',
        'Assemble burger with chosen ingredients between buns.',
      ],
    },
    {
      title: 'Pasta',
      image: require('../assets/images/pasta.jpeg'),
      ingredients: 'Pasta, tomato sauce, parmesan, basil.',
      preparation: [
        'Cook pasta until al dente.',
        'Mix with sauce and garnish.',
      ],
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <View style={appStyles.container}>
      <Text style={appStyles.header}>Top 3 Recipes</Text>
      <TopItem item={topItems[selectedIndex]} />
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

