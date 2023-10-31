import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

const AddListScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Adicionar Lista</Text>
            
            <Button title="Voltar" onPress={() => navigation.navigate("Home")}/>
        </View>
    );
}

export default AddListScreen;