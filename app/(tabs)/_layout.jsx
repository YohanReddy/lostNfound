import React from 'react';
import { Tabs } from 'expo-router';

const tabScreens = [
  { name: 'index', title: 'Home' },
  { name: 'two', title: 'Messages' },
  { name: 'three', title: 'Keepers' },
  { name: 'four', title: 'Profile' },
];

export default function TabLayout() {
  return (
    <Tabs>
      {tabScreens.map(screen => (
        <Tabs.Screen
          key={screen.name}
          name={screen.name}
          options={{ headerShown: false, title: screen.title }}
        />
      ))}
    </Tabs>
  );
}
