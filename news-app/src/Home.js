import { ActivityIndicator, FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import axios from 'axios'
import Card from './components/Card'

const Home = ({ navigation }) => {
    const [data, setData] = useState([])
    const [select, setSelect] = useState(0)
    const [loading, setLoading] = useState(false)
    const [category, setCategory] = useState([
        {
            id: 1,
            name: 'Top Headlines',
            category: 'general',
        },
        {
            id: 5,
            name: 'Sports',
            category: 'sports',
        },
        {
            id: 2,
            name: 'Business',
            category: 'business',
        },
        {
            id: 3,
            name: 'Entertainment',
            category: 'entertainment',
        },
        {
            id: 4,
            name: 'Health',
            category: 'health',
        },
        {
            id: 6,
            name: 'Science',
            category: 'science',
        },
        {
            id: 7,
            name: 'Technology',
            category: 'technology',
        },
    ]);

    const getData = async () => {
        try {
            setLoading(true)
            const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=8a743886d1b44df3949c18267507a4ef&category=${category[select].category}`)
                .then((response) => {
                    setData(response.data.articles)
                    setLoading(false)
                })
            return res
        } catch (error) {
            console.log(error);
        }
    }

    const getDataCate = async (category) => {
        try {
            setLoading(true)
            const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=8a743886d1b44df3949c18267507a4ef&category=${category}`)
                .then((response) => {
                    setData(response.data.articles)
                    setLoading(false)
                })
            return res
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <>
            {
                loading
                    ? <View className="flex-1 justify-center items-center">
                        <ActivityIndicator color={'green'} size={40}/>
                        <Text>Chờ xíu...</Text>
                    </View>
                    : <View className="flex-1 top-7">
                        <Header navigation={navigation} />

                        <View className='px-4 py-2'>
                            <FlatList
                                data={category}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                renderItem={({ item, index }) => {
                                    return (
                                        <Pressable key={index} className={index === select ? 'px-4 py-1 bg-rose-600 mr-3 rounded-md' : 'px-4 py-1 bg-slate-300 mr-3 rounded-md'} onPress={() => { setSelect(index); getDataCate(category[index].category) }}>
                                            <Text className={index === select ? 'text-white' : 'text-black'}>{item.name}</Text>
                                        </Pressable>
                                    )
                                }}
                            />
                        </View>

                        <View>
                            <FlatList
                                data={data}
                                renderItem={({ item, index }) => {
                                    return <Card item={item} navigation={navigation} index={index}/>
                                }}
                            />
                        </View>
                    </View>
            }
        </>
    )
}

export default Home

const styles = StyleSheet.create({})