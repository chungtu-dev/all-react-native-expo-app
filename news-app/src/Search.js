import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import Card from './components/Card';
// import axios from 'axios'

const Search = ({ navigation }) => {
  const [SearchText, setSearchText] = useState('');
  const [Data, setData] = useState([]);
  const searchNews = async (text) => {
    setSearchText(text);
    if (text.length > 2) {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${text}&apiKey=8a743886d1b44df3949c18267507a4ef`
      );
      const data = await response.json();
      // console.log('dataaaa',data.articles);
      setData(data.articles);
    }
  };
  return (
    <View className="flex-1 top-10">
      <View className="bg-redprimary flex-row items-center space-x-4 px-4">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeftIcon color={'white'} size={18} />
        </TouchableOpacity>
        <TextInput
          placeholder="Searching..."
          value={SearchText}
          placeholderTextColor={'white'}
          onChangeText={text => {
            searchNews(text);
          }}
          className="text-sm text-white p-5 m-5"
        />
      </View>

      <View className="mb-16">
        <FlatList
          showsVerticalScrollIndicator={false}
          data={Data}
          renderItem={({ item, index }) => {
            return <Card item={item} navigation={navigation} index={index} />;
          }}
        />
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});