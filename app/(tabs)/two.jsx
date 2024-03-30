import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';

// Sample data for users and messages
const users = [
    { id: 1, name: 'John Doe', profileImage: 'https://via.placeholder.com/150', lastMessage: 'Hello!', lastMessageTime: '11:30 AM' },
    { id: 2, name: 'Alice Smith', profileImage: 'https://via.placeholder.com/150', lastMessage: 'Hi there!', lastMessageTime: 'Yesterday' },
    { id: 3, name: 'Bob Johnson', profileImage: 'https://via.placeholder.com/150', lastMessage: 'Good morning', lastMessageTime: '3 days ago' },
];

const MessagesScreen = ({ navigation }) => {

    const renderUserItem = ({ item }) => (
        <TouchableOpacity
            className="flex-row items-center p-4 border-b border-gray-200"
            onPress={() => navigation.navigate('Chat', { user: item })}
        >
            <Image source={{ uri: item.profileImage }} className="w-12 h-12 rounded-full" />
            <View className="flex-1 ml-4">
                <Text className="text-lg font-semibold">{item.name}</Text>
                <Text className="text-sm text-gray-500">{item.lastMessage}</Text>
            </View>
            <View className="flex flex-col items-end">
                <Text className="text-sm text-gray-500">{item.lastMessageTime}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View className="flex-1 bg-white">
            <FlatList
                data={users}
                renderItem={renderUserItem}
                keyExtractor={item => item.id.toString()}
                className="mt-10"
            />
        </View>
    );
};

export default MessagesScreen;
