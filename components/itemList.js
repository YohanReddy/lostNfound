// LostAndFoundApp.js
import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import ItemCard from './itemCard';
import ItemGroups from './itemGroups';

const itemData = [
    {
        title: "Mouse",
        description: "Lenovo wired mouse",
        date: "20/10/2021",
        time: "12:00 PM",
        place: "Library",
        userName: "Rahul Sharma",
        tags: ["All items", "Bags"],
        url: 'https://5.imimg.com/data5/MP/YJ/MY-67677926/computer-mouse.jpg'
    },
    {
        title: "Bike Keys",
        description: "Yamaha bike keys",
        date: "30/03/2024",
        time: "12:00 PM",
        place: "Ground",
        userName: "John Reddy",
        tags: ["All items", "Claimed"],
        url: 'https://www.keyzone.in/cdn/shop/products/1-1_2.jpg?v=1669015948'
    },
    {
        title: "Bag",
        description: "Lost my bag in the library",
        date: "10/03/2024",
        time: "2:15 PM",
        place: "Library",
        userName: "Bhupender singh",
        tags: ["All items", "Bags"],
        url: 'https://imagescdn.planetfashion.in/img/app/product/7/746612-8415034.jpg?auto=format&w=494.40000000000003'
    },
    {
        title: "Charger",
        description: "Dell laptop charger",
        date: "17/03/2024",
        time: "12:00 PM",
        place: "H2-28",
        userName: "Lakshmi Rani",
        tags: ["All items", "Claimed"],
        url: 'https://techiestore.in/wp-content/uploads/2020/08/DSC_3463-grey.JPG.jpg'
    
    }
];

const LostAndFoundApp = () => {
    const [selectedTag, setSelectedTag] = useState("All items");

    const handleSelectTag = (tag) => {
        setSelectedTag(tag);
    };

    const filteredItems = itemData.filter(item => item.tags.includes(selectedTag));

    return (
        <View className="flex-1">
            <ItemGroups onSelectTag={handleSelectTag} />
            <FlatList
                data={filteredItems}
                renderItem={({ item }) => <ItemCard item={item} />}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

export default LostAndFoundApp;
