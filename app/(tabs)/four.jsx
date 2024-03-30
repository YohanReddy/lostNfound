import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const buttonList = [
    "Found",
    "Claimed"
];

const ItemGroups = ({ onSelectTag }) => {
    const [activeButton, setActiveButton] = useState("Found");

    return (
        <View className="flex-row ml-2 mb-2">
            {buttonList.map((button) => (
                <TouchableOpacity
                    key={button}
                    className={`px-4 py-2 rounded-full ${activeButton === button ? 'bg-blue-500' : 'bg-gray-400'} mr-4`}
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

const ProfileCard = ({ profile }) => {
    return (
        <View className="bg-white p-4 rounded-lg shadow-lg mb-4">
            <Image source={{ uri: profile.profilePhotoUrl }} className="w-24 h-24 rounded-full mb-4" />
            <Text className="text-xl font-bold mb-2">{profile.name}</Text>
            <Text className="text-lg mb-1">Email: {profile.email}</Text>
            <Text className="text-lg mb-1">Course: {profile.course}</Text>
            <Text className="text-lg">Roll: {profile.roll}</Text>
        </View>
    );
};

const FoundClaimedCard = ({ selectedTag }) => {
    // Add your logic to fetch and display found/claimed items based on the selected tag
    return (
        <View className="bg-white p-4 rounded-lg shadow-lg">
            <ItemGroups onSelectTag={() => {}} />
            {/* Add your logic to display found/claimed items based on selectedTag */}
        </View>
    );
};

const ProfilePage = () => {
    const [selectedTag, setSelectedTag] = useState("Found");

    return (
        <View className="flex-1 items-center justify-center">
            <ProfileCard profile={{ name: "John Doe", email: "john.doe@example.com", course: "Computer Science", roll: "CS101", profilePhotoUrl: "https://via.placeholder.com/150" }} />
            <FoundClaimedCard selectedTag={selectedTag} />
        </View>
    );
};

export default ProfilePage;
