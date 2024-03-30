import React, { useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

const buttonList = [
    "All items",
    "Claimed",
    "Bags",
];

const ItemGroups = ({ onSelectTag }) => {
    const [activeButton, setActiveButton] = useState("All items");

    return (
        <View className="flex-row gap-3 ml-2 mb-2">
            {buttonList.map((button) => (
                <TouchableOpacity
                    key={button}
                    className={`p-2 rounded-full ${activeButton === button ? 'bg-blue-500' : 'bg-gray-400'}`}
                    onPress={() => {
                        onSelectTag(button);
                        setActiveButton(button);
                    }}
                >
                    <Text className="text-white">{button}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default ItemGroups;
