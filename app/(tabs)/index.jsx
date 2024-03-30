import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import LostAndFoundApp from '../../components/itemList';
import { Octicons, MaterialIcons } from '@expo/vector-icons';


export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-white text-black">
      <View className="flex-row gap-5 bg-gray-100 items-center justify-around h-20 mt-2">
        <Text className="text-2xl font-extrabold text-blue-600">Lost & Found</Text>
        <View className="flex-row gap-4">
          <Octicons name="bell" size={24} color="black" />  
          <TouchableOpacity className="bg-gray-200 rounded-full flex-row gap-2">
          <Text>Scan</Text>
          <MaterialIcons name="qr-code-scanner" size={20} color="black" />   
          </TouchableOpacity> 
        </View>
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
