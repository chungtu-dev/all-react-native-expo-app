import React, { useState } from 'react'
import { FlatList, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { IconButton } from 'react-native-paper'

const TodoScreen = () => {

    const [todo, setTodo] = useState("")
    const [todoList, setTodoList] = useState([])
    const [todoEdited, setTodoEdited] = useState("")

    const renderData = ({ item, index }) => {
        return (
            <View style={styles.item_todo}>
                <Text style={styles.item_text}>{item.name}</Text>
                <IconButton icon="pencil" iconColor='#16a34a' onPress={() => handleUpdate(item)} />
                <IconButton icon="trash-can" iconColor='#db2777' onPress={() => handleDelete(item.id)} />
            </View>
        )
    }

    const handleAddTodo = () => {
        const idRandom = Math.random().toString(36).substring(2, 7);
        if (todo === "") {
            return; //return empty
        }
        setTodoList([
            ...todoList,
            {
                id: idRandom,
                name: todo
            }
        ])
        setTodo("")
    }

    const handleDelete = (id) => {
        // console.log(todoList);
        const listTodo = todoList.filter(i => i.id !== id)
        setTodoList(listTodo)
    }

    const handleUpdate = (item) => {
        setTodoEdited(item);
        setTodo(item.name)
    }

    const handleUpdateTodo = () => {
        const updatedTodo = todoList.map((i) => {
            if (i.id === todoEdited.id) {
                return {
                    ...i,
                    name: todo
                }
            }
            return i
        })
        setTodoList(updatedTodo)
        setTodoEdited("")
        setTodo("")
    }

    return (
        <View style={styles.todo_container}>
            <TextInput
                style={styles.todo_input}
                placeholder="Add new todo..."
                value={todo}
                onChangeText={(text) => setTodo(text)}
            />

            {
                todoEdited
                    ? <Pressable style={styles.button_add} onPress={() => handleUpdateTodo()}>
                        <Text style={styles.button_text}>Saved</Text>
                    </Pressable>
                    : <Pressable style={styles.button_add} onPress={() => handleAddTodo()}>
                        <Text style={styles.button_text}>Add</Text>
                    </Pressable>
            }
            <FlatList
                data={todoList}
                renderItem={renderData} />
            {
                todoList.length <= 0 && 
                <View style={styles.empty_list}>
                    <Image style={styles.empty_list_icon} source={require('../../assets/icon-todo-empty.png')}/>
                    <Text style={styles.empty_list_text}>Oops!... It's empty, add new Todo?</Text>
                </View>
            }
        </View>
    )
}

export default TodoScreen

const styles = StyleSheet.create({
    todo_container: {
        marginHorizontal: 16
    },
    todo_input: {
        borderWidth: 2,
        borderColor: '#06b6d4',
        borderRadius: 6,
        paddingVertical: 6,
        paddingHorizontal: 16
    },
    button_add: {
        backgroundColor: '#047857',
        borderRadius: 6,
        paddingVertical: 12,
        marginVertical: 35,
        marginTop: 25,
        alignItems: 'center'
    },
    button_text: {
        color: '#ede9fe',
        fontSize: 20
    },
    item_todo: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f3e8ff',
        borderRadius: 6,
        paddingHorizontal: 6,
        paddingVertical: 6,
        marginBottom: 12
    },
    item_text: {
        flex: 1,
        color: '#0f172a',
        fontSize: 15,
        paddingHorizontal: 6,
    },
    empty_list:{
        alignItems: 'center',
    },
    empty_list_icon:{
        width:150,
        height:150,
    },
    empty_list_text:{
        fontWeight: 'bold',
        color: '#14b8a6',
        fontSize:18
    }
})