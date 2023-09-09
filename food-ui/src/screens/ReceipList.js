import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import SearchFilter from '../components/SearchFilter'
import CategoriesFilter from '../components/CategoriesFilter'
import RecipeCard from '../components/RecipeCard'

const ReceipList = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header headerText={"hello admin"} headerIcon={"bell-o"} />
      <SearchFilter icon="search" placeholder="Enter your searching..." />

      <View style={styles.container_cate}>
        <Text style={styles.cateText}>Cate</Text>
        <CategoriesFilter />
      </View>

      <View style={styles.container_recipe}>
        <Text style={styles.cateText}>Recipes</Text>
        <RecipeCard />
      </View>
    </SafeAreaView>
  )
}

export default ReceipList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 40,
    marginHorizontal: 10,
  },
  container_cate: {
    backgroundColor: '#ffedd5',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ef4444'
  },
  cateText: {
    fontSize: 22,
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
  container_recipe:{
    flex: 1,
  }
})