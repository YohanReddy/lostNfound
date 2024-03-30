import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

const buttonList = [
    "All items",
    "Claimed",
    "Bags",
];

const ItemGroups = ({ onSelectTag }) => {
    return (
        <View className="flex-row gap-3 ml-2 mb-2">
            {buttonList.map((button) => (
                <TouchableOpacity
                    key={button}
                    className="bg-gray-400 p-2 rounded-full"
                    onPress={() => onSelectTag(button)}
                >
                    <Text className="text-white">{button}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default ItemGroups;
