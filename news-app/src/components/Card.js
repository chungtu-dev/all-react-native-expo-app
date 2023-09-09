import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { ArrowRightCircleIcon } from 'react-native-heroicons/solid';

const Card = ({ item, navigation, index }) => {
  // console.log('item', item);
  return (
    <View className='px-4 py-4 mb-4 relative'>
      <Image source={{ uri: item.urlToImage ? item.urlToImage : 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png' }} className='h-52 w-full rounded-md' resizeMode='cover' />
      <View className='px-2 py-2'>
        <Text className='text-sm text-gray-600 font-bold'>{item.title}</Text>
        <Text className='text-xs my-2'>{item.description}</Text>
        <View className='flex-row justify-between items-center my-2'>
          <Text className='text-xs my-1 text-gray-500'>{item.author}</Text>
          <View className='flex-row'>
            <Text className='text-xs my-2'>{item.publishedAt?.toLocaleString('vi-VN')}</Text>
            <Text className='text-xs my-2 text-gray-500'> - Time in VietNam</Text>
          </View>
        </View>
        <Pressable className='bg-redprimary px-4 py-2 w-28 justify-center items-center rounded-md flex-row space-x-2' onPress={() => navigation.navigate('NewViewer', { url: item.url })}>
          <Text>Read more</Text>
          <ArrowRightCircleIcon color='#fff' size={25} />
        </Pressable>
      </View>

      <View className='top-4 right-4 bg-redprimary absolute px-4 rounded-md'>
        <Text className='text-xs text-white py-1 font-bold'>{item.source.name}</Text>
      </View>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({})