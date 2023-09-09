import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { categories, colors } from '../Constant'

const CategoriesFilter = () => {
    return (
        <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                    categories.map((category, index) => {
                        return (
                            <View style={{
                                backgroundColor: index === 0 ? colors.COLOR_PRIMARY : colors.COLOR_LIGHT,
                                marginHorizontal: 10,
                                marginVertical: 16,
                                borderRadius: 8,
                                paddingHorizontal: 16,
                                paddingVertical: 18,
                            }} key={index}>
                                <Text style={{
                                    color: index === 0 && colors.COLOR_LIGHT
                                }}>{category.category}</Text>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default CategoriesFilter

const styles = StyleSheet.create({
})