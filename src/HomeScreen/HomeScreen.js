import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Button, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import metadata from './../storage.metada.json'
import AddListScreen from "../AddListScreen/AddListScreen";

export default HomeScreen = ({ navigation }) => {

    const [list, setList] = useState([]);
    const [lists, setLists] = useState([]);

    useEffect(() => {
        async function loadLists() {
            const savedLists = await AsyncStorage.getItem("lists"); 

            if (savedLists) {
              const parsedLists = JSON.parse(savedLists);
              setLists(parsedLists);
            } 
        }
        loadLists();
      }, []);

      const addList = (newListName) => {
        if (newListName) {
    
          const newList = { id: Date.now(), name: newListName };

          const updatedLists = [...lists, newList];
          setLists(updatedLists);
        
          saveListsToStorage(updatedLists);
        }
      }
    
      const ItemList = (id) => {
        navigation.navigate("TaskScreen", {
          listId: id,
          list: list, 
          onEditList: saveEditedList,
        });
      };

      const deleteList = (id) => {
       
        const updatedLists = lists.filter((list) => list.id !== id);
    
       
        setLists(updatedLists);
    
        try {

          saveListsToStorage(updatedLists);
        } catch (error) {
          console.error("Error saving lists: ", error);
        }
      };

      const saveListsToStorage = async (listsToSave) => {
        try {
          await AsyncStorage.setItem("lists", JSON.stringify(listsToSave))
        } catch (error) {
          console.error("Erro pra salvar a lista: ", error);
        }
      };

    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button title="Adicionar Lista" onPress={() => {
                 navigation.navigate("AddListScreen", {
                    onAddList: addList,
                  });
            }} >
            </Button>
            {lists.map((list) => (
        <View key={list.id}>

            <TouchableOpacity onPress={() => ItemList(list.id)}>
            
              <Text>{list.name}</Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.excluirBotao} onPress={() => deleteList(list.id)}>
            <Text style={styles.textoBotao}>Delete</Text>
          </TouchableOpacity>


        </View>
      ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 15,
        justifyContent: "center",
        backgroundColor: '#eee',
        alignItems: 'center',
        width: "100%",
    },

    botao: {
        backgroundColor: '#13abde',
    },

    texto: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',

    },

    excluirBotao: {
      backgroundColor: '#13abde',
      width:40,
      height:20
    }
})
