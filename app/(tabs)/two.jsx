// Inbox.js
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Link } from 'expo-router';

const messageData = [
    { id: 1, sender: 'John', subject: 'Meeting Reminder', date: 'March 25, 2024', content: 'Don\'t forget the meeting tomorrow.' },
    { id: 2, sender: 'Alice', subject: 'Project Update', date: 'March 24, 2024', content: 'Here\'s the latest progress on our project.' },
    // Add more messages as needed
];

const Inbox = () => {
    const handlePress = (id) => {
        Link.push(`/message/${id}`);
    }

    return (
        <View>
            {messageData.map(message => (
                <Pressable key={message.id} onPress={() => handlePress(message.id)}>
                    <View style={{ padding: 20, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
                        <Text style={{ fontWeight: 'bold' }}>{message.sender}</Text>
                        <Text>{message.subject}</Text>
                        <Text style={{ color: '#888' }}>{message.date}</Text>
                    </View>
                </Pressable>
            ))}
        </View>
    );
};

export default Inbox;
