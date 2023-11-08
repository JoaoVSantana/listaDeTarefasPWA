import { useEffect, useState } from "react";
import { Button, Text, View, TextInput, StyleSheet } from "react-native";

export default AddListScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <Text>Adicionar Lista</Text>

            <TextInput style={styles.input} placeholder="Digite o nome da lista"></TextInput>

            <Button title="Adicionar Lista" onPress={() => navigation.navigate("Home")} />


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 15,
        padding: 15,
        backgroundColor: '#eee',
        alignItems: 'center',
        width: "100%",
    },

    input: {

        width: "90%",
        padding: 15,
        fontSize: 18,
        borderWidth: 3,
        backgroundColor:'#CECBCA',
        borderColor: "#181014",
        borderStyle: "solid",
        borderRadius: 5,
        placeholderTextColor:'#000000',
    }
})