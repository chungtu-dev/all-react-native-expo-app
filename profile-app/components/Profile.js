import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
  RefreshControl,
} from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';

const Profile = () => {

  const image = {
    uri: 'https://c4.wallpaperflare.com/wallpaper/312/851/784/dolomiti-italy-autumn-lago-antorno-landscape-photography-desktop-hd-wallpaper-for-pc-tablet-and-mobile-3840%C3%972400-wallpaper-preview.jpg'
  }

  const [userInfo, setUserInfo] = useState('')
  const [refreshing, setRefreshing] = useState(false);
  const netInfo = useNetInfo();

  const fetchDataUser = () => {
    fetch(`https://reqres.in/api/users/1`)
    // fetch('http://localhost:8800/profile_info')
      .then((response) => response.json())
      .then((response) => {
        setUserInfo(response.data);
      })
  }

  useEffect(() => {
    fetchDataUser()
  }, [])

  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={styles.container}>
        <ImageBackground
          source={image}
          style={styles.imageBackground}
          resizeMode="cover"></ImageBackground>

        <Image
          source={{ uri: userInfo.avatar }}
          // source={profileImage}
          style={styles.imageProfile}
          resizeMode="cover"></Image>

        <View style={styles.statusOnlOff_container}>
          <View></View>
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 50,
              borderColor: 'white',
              borderWidth: 3,
              backgroundColor: netInfo.isConnected ? 'green' : 'red',
            }}
          />
        </View>

        <View style={styles.containerInfo}>
          <Text style={styles.profileName}>{userInfo.first_name}</Text>
          <Text style={styles.statusOnlOff_textInfo}>
            {netInfo.isConnected ? (
              <Text style={{ color: 'green' }}>Online</Text>
            ) : (
              <Text style={{ color: 'green' }}>Offline</Text>
            )}
          </Text>
          <Text style={styles.layoutInfo_text_child}>First name:&emsp;</Text>
          <View style={styles.layoutInfo}>
            <Text style={styles.layoutInfo_text}>{userInfo.first_name}</Text>
          </View>
          <Text style={styles.layoutInfo_text_child}>Last name:&emsp;</Text>
          <View style={styles.layoutInfo}>
            <Text style={styles.layoutInfo_text}>{userInfo.last_name}</Text>
          </View>
          <Text style={styles.layoutInfo_text_child}>Email:&emsp;</Text>
          <View style={styles.layoutInfo}>
            <Text style={styles.layoutInfo_text}>{userInfo.email}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const textCenter = {
  justifyContent: 'center',
  textAlign: 'center',
  alignItems: 'center',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imageBackground: {
    justifyContent: 'center',
    width: '100%',
    height: 250,
    position: 'relative',
  },
  imageProfile: {
    flex: 1,
    marginTop: 160,
    width: 200,
    height: 200,
    borderRadius: 50,
    position: 'absolute',
    borderColor: 'white',
    borderWidth: 2,
  },
  profileName: {
    ...textCenter,
    color: '#483D8B',
    paddingBottom: 15,
    fontSize: 18,
  },
  containerInfo: {
    marginTop: 120,
    justifyContent: 'space-evenly',
    width: '95%',
  },
  layoutInfo: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#ecf0f1',
    marginBottom: 10,
    padding: 10,
    borderColor: 'rgb(153, 222, 222)',
    borderWidth: 2,
    borderRadius: 13,
  },
  layoutInfo_text: {
    color: '#C71585',
    padding: 5,
  },
  layoutInfo_text_child: {
    color: '#A9A9A9',
    padding: 5,
  },
  statusOnlOff_container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '55%',
    position: 'absolute',
    marginTop: 330,
  },
  statusOnlOff_textInfo: {
    ...textCenter,
    fontSize: 15,
  },
});

export default Profile;