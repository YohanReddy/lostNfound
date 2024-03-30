import React from 'react';
import { Tabs } from 'expo-router';
import { Octicons } from '@expo/vector-icons';

const tabScreens = [
  { name: 'index', title: 'Home', icon: 'home' },
  { name: 'two', title: 'Messages', icon: 'inbox' },
  { name: 'three', title: 'Keepers', icon: 'people' },
  { name: 'four', title: 'Profile', icon: 'person' },
];

export default function TabLayout() {
  return (
    <Tabs>
      {tabScreens.map(screen => (
        <Tabs.Screen
          key={screen.name}
          name={screen.name}
          options={{ headerShown: true, title: screen.title,             
          tabBarIcon: ({ color, size }) => ( 
          <Octicons
            name={screen.icon}
            size={size}
            color={color}
          /> )}}
        />
      ))}
    </Tabs>
  );
}
