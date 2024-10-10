import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/AntDesign';
import Arrow from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  //Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Vibration,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Calculator = (props: {
  navigation: {navigate: (arg0: string) => void};
}) => {
  //main state difaine..
  const [data, setData] = useState('');
  const [bracket, setBracket] = useState(true);

  //result isFoalt or not chack;
  const isFoalt = (num: number) => {
    return !!(num % 1);
  };

  //Set storage Item..
  const LocalStorage = async (cal: string, res: string) => {
    try {
      let isData = await AsyncStorage.getItem('history');
      //console.log(isData);
      if (!isData) {
        let setItem = [{id: 1, cal, res, date: new Date().toLocaleString()}];
        await AsyncStorage.setItem('history', JSON.stringify(setItem));
      } else if (isData) {
        let ArrayData = JSON.parse(isData);
        let setItem = [
          ...ArrayData,
          {
            id: ArrayData.length + 1,
            cal,
            res,
            date: new Date().toLocaleString(),
          },
        ];
        await AsyncStorage.setItem('history', JSON.stringify(setItem));
      }
      //await AsyncStorage.removeItem('history');
    } catch (error) {
      Vibration.vibrate(300);
    }
  };

  //state data calculate..
  var result = () => {
    try {
      // eslint-disable-next-line no-eval
      let r = eval(data);
      if (r === undefined) {
        setData('⚠');
        Vibration.vibrate(150);
      } else {
        if (isFoalt(r)) {
          LocalStorage(data, r.toFixed(6));
          setData(`${r.toFixed(6)}`);
        } else {
          LocalStorage(data, r);
          setData(`${r}`);
        }
      }
      Vibration.vibrate(50);
    } catch (e) {
      Vibration.vibrate(200);
    }
  };

  const Brackets = () => {
    if (bracket) {
      setData(a => (a += '('));
      setBracket(false);
    } else {
      setData(a => (a += ')'));
      setBracket(true);
    }
  };

  return (
    <View style={styles.Body}>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          selectionColor="#35fd03"
          autoFocus
          value={data}
          // keyboardType="decimal-pad"
          //onFocus={() => Keyboard.dismiss()}
          showSoftInputOnFocus={false}
        />
        <View style={styles.Allbtn}>
          <TouchableOpacity
            onPress={() => setData(data.toString().slice(0, -1))}>
            <Arrow
              name="long-arrow-left"
              size={40}
              color={'#f4f'}
              style={styles.ReadArrow}
            />
          </TouchableOpacity>
          <View style={styles.nextSection}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('History')}>
              <FontAwesome name="clockcircleo" size={30} color="#0f8" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Scale')}>
              <MaterialCommunityIcons name="scale" size={30} color="#ff4" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.Round} />
        <View style={styles.BtnRow}>
          <TouchableOpacity onPress={() => setData('')}>
            <Text style={styles.Clear}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={Brackets}>
            <Text style={styles.FontBtn}>( )</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setData(a => (a += '%'))}>
            <Text style={styles.FontBtn}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setData(a => (a += '/'))}>
            <Text style={styles.FontBtn}>÷</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.BtnRow}>
          <TouchableOpacity
            onPress={() => {
              setData(a => (a += '7'));
            }}>
            <Text style={styles.Number}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setData(a => (a += '8'));
            }}>
            <Text style={styles.Number}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setData(a => (a += '9'));
            }}>
            <Text style={styles.Number}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setData(a => (a += '*'));
            }}>
            <Text style={styles.FontBtn}>x</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.BtnRow}>
          <TouchableOpacity
            onPress={() => {
              setData(a => (a += '4'));
            }}>
            <Text style={styles.Number}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setData(a => (a += '5'));
            }}>
            <Text style={styles.Number}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setData(a => (a += '6'));
            }}>
            <Text style={styles.Number}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setData(a => (a += '-'));
            }}>
            <Text style={styles.FontBtn}>−</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.BtnRow}>
          <TouchableOpacity
            onPress={() => {
              setData(a => (a += '1'));
            }}>
            <Text style={styles.Number}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setData(a => (a += '2'));
            }}>
            <Text style={styles.Number}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setData(a => (a += '3'));
            }}>
            <Text style={styles.Number}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setData(a => (a += '+'));
            }}>
            <Text style={styles.FontBtn}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.BtnRow}>
          <Text style={styles.FontBtn}>+/-</Text>
          <TouchableOpacity
            onPress={() => {
              setData(a => (a += '0'));
            }}>
            <Text style={styles.Number}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setData(a => (a += '.'));
            }}>
            <Text style={styles.FontBtn}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={result}>
            <Text style={styles.result}>=</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  Body: {
    backgroundColor: '#001',
    width: '100%',
    height: '100%',
  },

  input: {
    marginTop: 10,
    height: 110,
    fontSize: 55,
    borderWidth: 1,
    textAlign: 'right',
    color: '#0f9',
    padding: 8,
    letterSpacing: 2,
  },
  Round: {
    marginTop: 3,
    borderTopColor: '#555',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  Allbtn: {
    position: 'relative',
    marginTop: 5,
    width: '100%',
    // backgroundColor: '#030',
    height: 60,
    alignItems: 'center',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
  nextSection: {
    width: 170,
    height: 60,
    //backgroundColor: '#30c',
    alignItems: 'center',
    justifyContent: 'space-around',
    //flex: 1,
    flexDirection: 'row',
  },
  BtnRow: {
    width: '100%',
    height: 80,
    marginTop: 20,
    //backgroundColor: '#0fc',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  FontBtn: {
    width: 80,
    height: 80,
    backgroundColor: '#333',
    color: '#0f3',
    borderRadius: 40,
    fontSize: 35,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  ReadArrow: {
    marginRight: 20,
  },
  Clear: {
    width: 80,
    height: 80,
    backgroundColor: '#333',
    color: '#f03',
    borderRadius: 40,
    fontSize: 30,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  result: {
    width: 80,
    height: 80,
    backgroundColor: '#5e3',
    color: '#fff',
    borderRadius: 40,
    fontSize: 45,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  Number: {
    width: 80,
    height: 80,
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: 40,
    fontSize: 30,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export default Calculator;
