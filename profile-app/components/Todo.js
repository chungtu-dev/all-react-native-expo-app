import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Alert, TextInput } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import axios from 'axios';

const DropdownComponent = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const [provinceList, setProvinceList] = useState([])
  const [districtList, setDistrictList] = useState([])
  const [wardList, setWardList] = useState([])

  useEffect(() => {
    const fetchDataProvinces = () => {
      axios.get('https://vapi.vnappmob.com/api/province')
        .then((res) => {
          // const { data } = res;
          // if (res) {
          //   // const arrData = JSON.stringify(data.results)
          //   setProvinceList(data.results)
          //   console.log('data-province', data.results)
          //   Alert.alert('okela!!')
          // }
          // else {
          //   Alert.alert('có lỗi gọi API')
          // }
          // console.log('datas', JSON.stringify(res.data.results))
          var count = Object.keys(res.data.results).length
          let arrData = []
          for (var i = 0; i < count; i++) {
            arrData.push({
              value: res.data.results[i].province_id,
              label: res.data.results[i].province_name
            })
          }
          // console.log('data-pro', arrData)
          setProvinceList(arrData)
        }).catch((err) => {
          Alert.alert('lỗi cấu trúc', err)
        })
    }
    fetchDataProvinces()
  }, []);


  const handleDistrict = (provinceid) => {
    axios.get(`https://vapi.vnappmob.com/api/province/district/${provinceid}`)
      .then((res) => {
        console.log('datas', JSON.stringify(res.data.results))
        var count = Object.keys(res.data.results).length
        let arrData = []
        for (var i = 0; i < count; i++) {
          arrData.push({
            value: res.data.results[i].district_id,
            label: res.data.results[i].district_name
          })
        }
        console.log('data-disy', arrData)
        setDistrictList(arrData)
      }).catch((err) => {
        Alert.alert('lỗi cấu trúc', err)
      })
  }

  const handleWard = (districtid) => {
    axios.get(`https://vapi.vnappmob.com/api/province/ward/${districtid}`)
      .then((res) => {
        console.log('datas', JSON.stringify(res.data.results))
        var count = Object.keys(res.data.results).length
        let arrData = []
        for (var i = 0; i < count; i++) {
          arrData.push({
            value: res.data.results[i].ward_id,
            label: res.data.results[i].ward_name
          })
        }
        console.log('data-disy', arrData)
        setWardList(arrData)
      }).catch((err) => {
        Alert.alert('lỗi cấu trúc', err)
      })
  }

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: '#ddd', padding: 10, borderRadius: 15 }}>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={provinceList}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select country' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            handleDistrict(item.value);
            setIsFocus(false);
          }}
        />
      </View>

      <View style={{ backgroundColor: '#ddd', padding: 0, borderRadius: 15 }}>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={districtList}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select state' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            handleWard(item.value);
            setIsFocus(false);
          }}
        />
      </View>

      <View style={{ backgroundColor: '#ddd', paddingTop: 0, borderRadius: 15 }}>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={wardList}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select city' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
      </View>
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#B084CC',
    padding: 0,
    justifyContent: 'center',
    alignContent: 'center',
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

// https://www.youtube.com/watch?v=tN6MpJ9ElJY&ab_channel=PradipDebnath