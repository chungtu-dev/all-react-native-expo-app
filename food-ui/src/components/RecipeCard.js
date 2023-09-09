import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, recipeList } from '../Constant'
import { FontAwesome } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const RecipeCard = () => {
    const navigation = useNavigation()
    return (
        <View>
            <FlatList
                data={recipeList}
                renderItem={({ item }) => (
                    <Pressable onPress={() => navigation.navigate("RecipeDetail", { item: item })} style={styles.containerList}>
                        <Image source={item.image} style={styles.itemImage} />
                        <Text>{item.name}</Text>
                        <View style={styles.itemDetail}>
                            <Text>{item.time}</Text>
                            <Text> | </Text>
                            <View style={styles.itemRating}>
                                <Text style={styles.itemRating_Text}>{item.rating}</Text>
                                <FontAwesome name="star" size={16} color={colors.COLOR_PRIMARY} />
                            </View>
                        </View>
                    </Pressable>
                )}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default RecipeCard

const styles = StyleSheet.create({
    containerList: {
        backgroundColor: colors.COLOR_LIGHT,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        borderRadius: 16,
        marginVertical: 16,
        alignItems: "center",
        paddingHorizontal: 8,
        paddingVertical: 26,
    },
    itemImage: {
        width: 150,
        height: 150,
        resizeMode: 'center',
    },
    itemDetail: {
        flexDirection: 'row',
        marginTop: 8,
    },
    itemRating: {
        flexDirection: 'row'
    },
    itemRating_Text: {
        marginRight: 4
    }
})