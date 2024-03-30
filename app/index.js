import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>index</Text>
      <Link href="/(tabs)">Go to two</Link>
    </View>
  )
}

export default index