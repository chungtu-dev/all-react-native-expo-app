import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'

const SearchFilter = ({ icon, placeholder }) => {
    return (
        <View style={styles.container}>
            <FontAwesome name={icon} size={20} color='#fca5a5' />
            <TextInput style={styles.inputSearch} placeholder={placeholder}></TextInput>
        </View>
    )
}

export default SearchFilter

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        paddingVertical: 16,
        paddingHorizontal: 16,
        borderRadius: 8,
        marginVertical: 16,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },
    inputSearch: {
        paddingLeft: 8,
        fontSize: 16,
    },
})