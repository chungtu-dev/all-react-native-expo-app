import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'

const RecipeDetail = ({ navigation, route }) => {

  const { item } = route.params
  // console.log(item);

  return (
    <View style={{ backgroundColor: item.color, ...flex }}>
      <SafeAreaView style={{ backgroundColor: item.color, ...styles.header }}>
        <Pressable style={styles.header_button} onPress={() => navigation.goBack()}>
          <FontAwesome name={'arrow-circle-left'} size={28} color={BG_COLORS.white} style={styles.icon} />
        </Pressable>
        <FontAwesome name={'heart-o'} size={28} color={BG_COLORS.white} />
      </SafeAreaView>
      <View style={styles.recipeContainerDetail}>
        <View style={styles.recipeDetail}>
          <Image source={item.image} style={styles.itemImage} />
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.name}>
            {item.name}
          </Text>

          <Text style={styles.description}>
            {item.description}
          </Text>

          <View style={styles.containerTimeCook}>
            <View style={styles.timeCook}>
              <Text style={styles.timeCook_title}>Time</Text>
              <Text style={styles.timeCook_detail}>{item.time}</Text>
            </View>

            <View style={styles.timeCook}>
              <Text style={styles.timeCook_title}>Difficulty</Text>
              <Text style={styles.timeCook_detail}>{item.difficulty}</Text>
            </View>

            <View style={styles.timeCook}>
              <Text style={styles.timeCook_title}>Calories</Text>
              <Text style={styles.timeCook_detail}>{item.calories}</Text>
            </View>
          </View>

          <View style={styles.ingredientsContainer}>
            <Text style={styles.ingredientsTitle}>Ingredients</Text>
            {
              item.ingredients.map((i, index) => {
                return (
                  <View style={styles.ingredientsItemContainer} key={index}>
                    <View style={styles.ingredient}></View>
                    <Text style={styles.ingredientName}>{i}</Text>
                  </View>
                )
              })
            }
          </View>

          <View style={styles.ingredientsContainer}>
            <Text style={styles.ingredientsTitle}>Ingredients</Text>
            {
              item.steps.map((i, index) => {
                return (
                  <View style={styles.ingredientsItemContainer} key={index}>
                    <View style={styles.ingredient}></View>
                    <Text style={styles.ingredientName}>{i}</Text>
                  </View>
                )
              })
            }
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default RecipeDetail

const flex = {
  flex: 1,
}

const flex_row = {
  flexDirection: 'row',
}

const BG_COLORS = {
  brow: '#854d0e',
  white: '#fff',
  orange: '#fb923c',
  red: '#dc2626'
}

const styles = StyleSheet.create({
  header: {
    // ...flex,
    ...flex_row,
    marginHorizontal: 16,
    marginVertical: 40,
  },
  header_button: {
    ...flex,
  },
  icon: {
    ...flex,
  },
  recipeContainerDetail: {
    ...flex,
    backgroundColor: BG_COLORS.white,
    borderTopLeftRadius: 56,
    borderTopRightRadius: 56,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  recipeDetail: {
    height: 100,
    width: 200,
    position: 'absolute',
    top: -50,
  },
  itemImage: {
    width: '100%',
    height: '100%',
    resizeMode: "contain",
    zIndex: 1,
  },
  name: {
    marginTop: 50,
    fontSize: 20,
    fontWeight: 'bold'
  },
  description: {
    fontSize: 18,
    marginVertical: 16
  },
  containerTimeCook: {
    ...flex_row,
    justifyContent: 'center',
    width: '100%',
    padding: 10
  },
  timeCook: {
    margin: 10,
    paddingHorizontal: 6,
    paddingVertical: 16,
    alignItems: 'center',
    backgroundColor: BG_COLORS.orange,
    borderRadius: 8
  },
  timeCook_title: {
    fontSize: 15,
  },
  timeCook_detail: {
    fontSize: 20,
  },
  ingredientsContainer: {
    alignSelf: 'flex-start',
    marginVertical: 10,
  },
  ingredientsTitle: {
    fontSize: 18,
  },
  ingredientsItemContainer: {
    ...flex_row,
    alignItems: 'center',
  },
  ingredient: {
    backgroundColor: BG_COLORS.red,
    height: 10,
    width: 10,
    borderRadius: 5
  },
  ingredientName: {
    marginLeft: 18,
  },
})