import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";

export default HomeScreen = ({ navigation }) => {

    const [listas, setListas] = useState(new Array());
    

    const getUserName = async () => {
        const userName = await AsyncStorage.getItem(metadata.USER.USERNAME);
        if (userName) {
            setName(userName);
        }
    }

    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Pressable style={styles.botao} onPress={() => navigation.navigate("AddListScreen")} >
                <Text style={styles.texto}>Add Lista</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        gap: 15,
        padding: 15,
        backgroundColor: '#eee',
        alignItems: 'center',
        width: "100%",
    },
   
    botao:{
        backgroundColor: '#13abde',
        width:150,
        height:50,
    },

    texto:{
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        
    }
})
