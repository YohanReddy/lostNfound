import { View, Image, Text, TouchableOpacity } from 'react-native';


const ItemCard = ({ item }) => {
    return (
        <View className="m-4 p-2 border border-gray-300 rounded-lg">
            <Image className="w-full h-48" source={{uri: item.url}} resizeMode="contain"/>
            <Text className="text-lg font-bold mt-2">{item.title}</Text>
            <Text className="text-sm mt-1">{item.description}</Text>
            <View className="flex-row justify-between mt-2">
                <Text className="text-sm">{item.date}</Text>
                <Text className="text-sm">{item.time}</Text>
                <Text className="text-sm">{item.place}</Text>
            </View>
            <View className="flex-row justify-between">
                <Text className="text-sm mt-1">{item.userName}</Text>
                <TouchableOpacity className="bg-blue-500 text-white w-20 p-2 rounded-lg mt-2">
                    <Text className="text-sm text-center">Claim</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ItemCard;