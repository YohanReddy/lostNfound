import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, View, Text, Image } from 'react-native';

const KeeperProfile = ({ keeper, onBack }) => {
    return (
        <View className="bg-white p-4 rounded-lg shadow-lg mb-4">
            <TouchableOpacity onPress={onBack} className="mb-4">
                <Text className="text-blue-500">Back</Text>
            </TouchableOpacity>
            <Image source={{ uri: keeper.profilePhotoUrl }} className="w-24 h-24 rounded-full mb-4" />
            <Text className="text-xl font-bold mb-2">{keeper.name}</Text>
            <Text className="text-lg mb-1">Email: {keeper.email}</Text>
            <Text className="text-xl font-bold mt-4 mb-2">Items Held:</Text>
            {keeper.items.map(item => (
                <View key={item.id} className="ml-4">
                    <Text>{item.name}</Text>
                    <Text className="text-gray-600">{item.description}</Text>
                </View>
            ))}
        </View>
    );
};

const KeepersPage = () => {
    const [selectedKeeper, setSelectedKeeper] = useState(null);

    const handleBack = () => {
        setSelectedKeeper(null);
    };

    // Sample data for keepers
    const keeperData = [
        {
            id: 1,
            name: 'Keeper 1',
            email: 'keeper1@example.com',
            profilePhotoUrl: 'https://via.placeholder.com/150',
            items: [
                { id: 1, name: 'Item 1', description: 'Description of Item 1' },
                { id: 2, name: 'Item 2', description: 'Description of Item 2' }
            ]
        },
        {
            id: 2,
            name: 'Keeper 2',
            email: 'keeper2@example.com',
            profilePhotoUrl: 'https://via.placeholder.com/150',
            items: [
                { id: 3, name: 'Item 3', description: 'Description of Item 3' }
            ]
        }
    ];

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
            {selectedKeeper ? (
                <KeeperProfile keeper={selectedKeeper} onBack={handleBack} />
            ) : (
                keeperData.map(keeper => (
                    <TouchableOpacity
                        key={keeper.id}
                        className="bg-white p-4 rounded-lg shadow-lg mb-4"
                        onPress={() => setSelectedKeeper(keeper)}
                    >
                        <Image source={{ uri: keeper.profilePhotoUrl }} className="w-24 h-24 rounded-full mb-2" />
                        <Text className="text-xl font-bold">{keeper.name}</Text>
                        <Text className="text-lg text-gray-600">Email: {keeper.email}</Text>
                    </TouchableOpacity>
                ))
            )}
        </ScrollView>
    );
};

export default KeepersPage;
