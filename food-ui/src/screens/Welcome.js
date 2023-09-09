import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

const Welcome = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.welcome_img} source={require('../../assets/images/welcome1.png')} />
            <Text style={styles.welcome_text}>Welcome Customer</Text>
            <Text style={styles.welcome_sub_text}>Let's Cook like a chef</Text>
            <Pressable onPress={() => navigation.navigate('ReceipList')} style={styles.btn_go}>
                <View style={styles.btn_go_container}>
                    <Text style={styles.btn_go_text}>Read more!</Text>
                    <Ionicons name="arrow-forward-circle-outline" size={24} color="black" />
                </View>
            </Pressable>
        </View>
    )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    welcome_img: {
        margin: 50,
        width: 250,
        height: 250,
        resizeMode:'contain',
    },
    welcome_text: {
        color: '#f87171',
        fontSize: 33,
        fontWeight: 'bold',
    },
    welcome_sub_text: {
        fontSize: 25,
        color: '#57534e',
        marginTop: 44,
        marginBottom: 35,
        fontWeight: 'bold',
    },
    btn_go: {
        backgroundColor: '#fbbf24',
        borderRadius: 18,
        paddingVertical: 18,
        width: '80%',
        alignItems: 'center'
    },
    btn_go_container:{
        flexDirection: 'row',
    },
    btn_go_text: {
        fontSize: 18,
        color: '#3f3f46',
        marginHorizontal: 10
    }
})