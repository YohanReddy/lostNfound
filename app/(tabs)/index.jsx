import { SafeAreaView, Text, TextInput, View } from 'react-native';
import LostAndFoundApp from '../../components/itemList';

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-white text-black">
      <View className="flex-row gap-5 bg-gray-100 items-center justify-around h-20 mt-2">
        <Text className="text-xl">Lost & Found</Text>
        <Text>Icon</Text>
      </View>
      <TextInput
        className="border-2 border-gray-100 bg-gray-50 rounded-full m-5 p-3"
        placeholder
        ="Search your lost item here"
      />
      <LostAndFoundApp />
</SafeAreaView>
  );
}
