import React, {useState} from 'react';

import {
  //Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const Calculator = () => {
  const [data, setData] = useState('');

  var result = () => {
    // eslint-disable-next-line no-eval
    let r = eval(data);
    setData(`${r}`);
  };
  // console.log(eval(data));
  return (
    <View style={styles.Body}>
      <SafeAreaView>
        <Text style={styles.text}>@zobayer</Text>
        <TextInput
          style={styles.input}
          selectionColor="#35fd03"
          autoFocus
          value={data}
          keyboardType="decimal-pad"
          // onFocus={() => Keyboard.dismiss()}
        />
        <View style={styles.Allbtn}>
          <Text
            style={styles.crossllbtn}
            onPress={() => setData( data.toString().slice(0 , -1))}>
            X
          </Text>
          <View style={styles.nextSection}>
            <Text style={styles.crossllbtn}>L</Text>
            <Text style={styles.crossllbtn}>W</Text>
            <Text style={styles.crossllbtn}>H</Text>
          </View>
        </View>
        <View style={styles.Round} />
        <View style={styles.BtnRow}>
          <Text style={styles.FontBtn} onPress={() => setData('')}>
            C
          </Text>
          <Text style={styles.FontBtn}>()</Text>
          <Text style={styles.FontBtn} onPress={() => setData(a => (a += '%'))}>
            %
          </Text>
          <Text style={styles.FontBtn} onPress={() => setData(a => (a += '/'))}>
            /
          </Text>
        </View>
        <View style={styles.BtnRow}>
          <Text style={styles.FontBtn} onPress={() => setData(a => (a += '7'))}>
            7
          </Text>
          <Text style={styles.FontBtn} onPress={() => setData(a => (a += '8'))}>
            8
          </Text>
          <Text style={styles.FontBtn} onPress={() => setData(a => (a += '9'))}>
            9
          </Text>
          <Text style={styles.FontBtn} onPress={() => setData(a => (a += '*'))}>
            x
          </Text>
        </View>
        <View style={styles.BtnRow}>
          <Text style={styles.FontBtn} onPress={() => setData(a => (a += '4'))}>
            4
          </Text>
          <Text style={styles.FontBtn} onPress={() => setData(a => (a += '5'))}>
            5
          </Text>
          <Text style={styles.FontBtn} onPress={() => setData(a => (a += '6'))}>
            6
          </Text>
          <Text style={styles.FontBtn} onPress={() => setData(a => (a += '-'))}>
            -
          </Text>
        </View>
        <View style={styles.BtnRow}>
          <Text style={styles.FontBtn} onPress={() => setData(a => (a += '1'))}>
            1
          </Text>
          <Text style={styles.FontBtn} onPress={() => setData(a => (a += '2'))}>
            2
          </Text>
          <Text style={styles.FontBtn} onPress={() => setData(a => (a += '3'))}>
            3
          </Text>
          <Text style={styles.FontBtn} onPress={() => setData(a => (a += '+'))}>
            +
          </Text>
        </View>
        <View style={styles.BtnRow}>
          <Text style={styles.FontBtn}>+/-</Text>
          <Text style={styles.FontBtn} onPress={() => setData(a => (a += '0'))}>
            0
          </Text>
          <Text style={styles.FontBtn} onPress={() => setData(a => (a += '.'))}>
            .
          </Text>

          <Text style={styles.FontBtn} onPress={result}>
            =
          </Text>
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
  text: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
  input: {
    marginTop: 20,
    height: 90,
    fontSize: 45,
    borderWidth: 1,
    textAlign: 'right',
    color: '#fff',
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
  crossllbtn: {
    color: '#0fc',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 30,
    width: 40,
    height: 40,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#0fc',
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
    fontSize: 30,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export default Calculator;
