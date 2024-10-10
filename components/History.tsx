import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
const History = () => {
  const [his, setHis] = useState([]);

  useEffect(() => {
    (async () => {
      let data = await AsyncStorage.getItem('history');
      if (data) {
        setHis(JSON.parse(data));
      }
    })();
  }, []);

  //Remove Item
  const RemoveHis = async () => {
    await AsyncStorage.removeItem('history');
    setHis([]);
  };

  return (
    <ScrollView style={styles.mainpage}>
      <View style={styles.staTice}>
        <Text style={styles.FontStyle}>History</Text>
        <Text style={styles.FontStyle}>Date</Text>
        <AntDesign name="delete" size={28} color={'#f03'} onPress={RemoveHis} />
      </View>
      {his.map((value: any, index: React.Key | null | undefined) => {
        return (
          <ScrollView
            horizontal
            contentContainerStyle={styles.AllData}
            //style={styles.AllData}
            key={index}>
            <Text style={styles.LocalColor}>{`${value.cal}=${value.res}`}</Text>
            <Text style={styles.LocalColor}>{value.date}</Text>
          </ScrollView>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainpage: {
    backgroundColor: '#212',
  },
  staTice: {
    width: '100%',
    color: '#fff',
    flexDirection: 'row',
    height: 70,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#075',
  },
  FontStyle: {
    color: '#fff',
    fontSize: 25,
  },

  AllData: {
    marginTop: 5,
    backgroundColor: '#333',
    //width: '100%',
    height: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 8,

    flexGrow: 1,
  },
  LocalColor: {
    color: '#0f3',
    fontSize: 18,
    marginLeft: 10,
    marginRight: 10,
  },
});
export default History;
