import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MagnifyingGlassIcon } from "react-native-heroicons/solid";

const Header = ({navigation}) => {
    return (
        <View className='flex-row px-4 py-2 justify-between items-center bg-white shadow-lg'>
            <Text className='text-base font-semibold text-redprimary'>Country</Text>
            <Pressable onPress={()=> navigation.navigate('Search')}>
                <MagnifyingGlassIcon color='#000' size={24} />
            </Pressable>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({})