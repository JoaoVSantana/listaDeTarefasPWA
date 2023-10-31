import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            
            <Button title="Add List" onPress={() => navigation.navigate("AddListScreen")}/>
        </View>
    );
}

export default HomeScreen;