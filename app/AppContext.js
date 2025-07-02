import React, { createContext, useState } from 'react';

export const AppContext = createContext();

const imageMap = {
  'pizza.jpg': require('../assets/images/pizza.jpg'),
  'burger.jpg': require('../assets/images/burger.jpg'),
  'pasta.jpeg': require('../assets/images/pasta.jpeg'),
  'salad.jpg': require('../assets/images/salad.jpg'),
  'icecream.jpg': require('../assets/images/icecream.jpg'),
  'taco.jpg': require('../assets/images/taco.jpg'),
};

const defaultItems = [
  {
    title: 'Pizza',
    image: imageMap['pizza.jpg'],
    imageName: 'pizza.jpg',
    ingredients: 'Pizza dough, tomato sauce, fresh mozzarella, pepperoni.',
    preparation: [
      'Roll dough flat on pizza stone.',
      'Add sauce, cheese, and toppings and cook in oven.',
    ],
  },
  {
    title: 'Burger',
    image: imageMap['burger.jpg'],
    imageName: 'burger.jpg',
    ingredients: 'Buns, beef patty, lettuce, red onion, pickles, cheese, chipotle sauce.',
    preparation: [
      'Grill beef patty.',
      'Assemble burger with chosen ingredients between buns.',
    ],
  },
  {
    title: 'Pasta',
    image: imageMap['pasta.jpeg'],
    imageName: 'pasta.jpeg',
    ingredients: 'Pasta, tomato sauce, parmesan, basil.',
    preparation: [
      'Cook pasta until al dente.',
      'Mix with sauce and garnish.',
    ],
  },
];

export const AppProvider = ({ children }) => {
  const [items, setItems] = useState(defaultItems);

  const updateItem = (index, updatedItem) => {
    const newItems = [...items];
    newItems[index] = {
      ...updatedItem,
      image: imageMap[updatedItem.imageName],
    };
    setItems(newItems);
  };

  return (
    <AppContext.Provider value={{ items, updateItem }}>
      {children}
    </AppContext.Provider>
  );
};