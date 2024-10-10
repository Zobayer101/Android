import {
  Text,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';

import Caret from 'react-native-vector-icons/AntDesign';
import Arrowup from 'react-native-vector-icons/AntDesign';
import Arrowdown from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

const Scale = () => {
  const [unit, setUnit] = useState('area');
  return (
    <ScrollView style={style.mainpage}>
      <ScrollView
        contentContainerStyle={style.HeaderStyle}
        horizontal
        showsHorizontalScrollIndicator={false}>
        <TouchableOpacity onPress={() => setUnit('area')}>
          <Text style={unit === 'area' ? style.newText : style.headerText}>
            Area
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setUnit('length')}>
          <Text style={unit === 'length' ? style.newText : style.headerText}>
            Length
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setUnit('temperature')}>
          <Text
            style={unit === 'temperature' ? style.newText : style.headerText}>
            Temperature
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setUnit('volume')}>
          <Text style={unit === 'volume' ? style.newText : style.headerText}>
            Volume
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setUnit('mass')}>
          <Text style={unit === 'mass' ? style.newText : style.headerText}>
            Mass
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setUnit('data')}>
          <Text style={unit === 'data' ? style.newText : style.headerText}>
            Data
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setUnit('speed')}>
          <Text style={unit === 'speed' ? style.newText : style.headerText}>
            Speed
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setUnit('time')}>
          <Text style={unit === 'time' ? style.newText : style.headerText}>
            Time
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setUnit('tip')}>
          <Text style={unit === 'tip' ? style.newText : style.headerText}>
            Tip
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={style.Hr} />
      <ScrollView contentContainerStyle={style.contunerStyle}>
        <View style={style.outerBox}>
          <Text style={style.outerMtext}>
            Celius <Caret name="caretdown" color={'#fff'} size={20} />
          </Text>
          <View style={style.Modal}>
            <Text style={style.ModelText}>Celius</Text>
            <Text style={style.ModelText}>Fahrenheit</Text>
            <Text style={style.ModelText}>Kalvin</Text>
          </View>
          <View style={style.InputBox}>
            <TextInput
              selectionColor="#35fd03"
              showSoftInputOnFocus={false}
              style={style.inputArea}
            />
            <Text style={style.outerMtext}>°C</Text>
          </View>
          <View style={style.Hr} />
          <Text style={style.outerMtext}>
            Fahrenheit <Caret name="caretdown" color={'#fff'} size={20} />
          </Text>
          <View style={style.InputBox}>
            <TextInput
              selectionColor="#35fd03"
              showSoftInputOnFocus={false}
              style={style.inputArea}
            />
            <Text style={style.outerMtext}>°C</Text>
          </View>
          <View style={style.Hr} />
        </View>
      </ScrollView>
      <View style={style.ButtonStyle}>
        {/* 1 no: Row */}
        <View style={style.BTNset}>
          <TouchableOpacity>
            <Text style={style.BTNtext}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={style.BTNtext}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={style.BTNtext}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={style.BTNtext}>
              <Feather name="delete" size={27} color={'#0f3'} />
            </Text>
          </TouchableOpacity>
        </View>
        {/* 2 no: Row */}
        <View style={style.BTNset}>
          <TouchableOpacity>
            <Text style={style.BTNtext}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={style.BTNtext}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={style.BTNtext}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={style.Ctext}>C</Text>
          </TouchableOpacity>
        </View>
        {/* 3 no:Row */}
        <View style={style.BTNset}>
          <TouchableOpacity>
            <Text style={style.BTNtext}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={style.BTNtext}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={style.BTNtext}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={style.BTNtext}>
              <Arrowup name="arrowup" size={28} color={'#0f3'} />
            </Text>
          </TouchableOpacity>
        </View>
        {/* 4 no: Row */}
        <View style={style.BTNset}>
          <TouchableOpacity>
            <Text style={style.BTNtext}>+/-</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={style.BTNtext}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={style.BTNtext}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={style.BTNtext}>
              <Arrowdown name="arrowdown" size={29} color={'#0f3'} />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
const style = StyleSheet.create({
  mainpage: {
    backgroundColor: '#001',
  },
  HeaderStyle: {
    marginTop: 5,
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    //backgroundColor: '#010',
  },
  headerText: {
    color: '#fff',
    padding: 8,
    borderRadius: 5,
    fontSize: 15,
  },
  newText: {
    color: '#ffa',
    padding: 8,
    borderRadius: 10,
    fontSize: 15,
    backgroundColor: '#505',
  },
  Hr: {
    marginTop: 10,
    borderTopColor: '#555',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  contunerStyle: {
    marginTop: 10,
    width: 'auto',
  },
  outerBox: {
    width: 390,
    height: 280,
    // backgroundColor: '#032',
    padding: 4,
  },
  outerMtext: {
    color: '#fff',
    fontSize: 23,
    marginLeft: 5,
    position: 'relative',
  },
  InputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputArea: {
    marginTop: 7,
    width: '90%',
    height: 80,
    //borderWidth: 1,
    //borderColor: '#fff',
    textAlign: 'right',
    fontSize: 40,
    color: '#fff',
  },
  Modal: {
    position: 'absolute',
    width: 200,
    display: 'none',
    borderRadius: 10,
    backgroundColor: '#333',
    zIndex: 1,
  },
  ModelText: {
    position: 'relative',
    width: 200,
    height: 50,
    fontSize: 20,
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  ButtonStyle: {
    width: '100%',
    height: 360,
    // backgroundColor: '#f0c',
  },
  BTNset: {
    width: '100%',
    height: 90,
    //backgroundColor: '#0ea',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  BTNtext: {
    height: 70,
    width: 70,
    backgroundColor: '#112',
    color: '#fff',
    fontSize: 28,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 35,
  },
  Ctext: {
    height: 70,
    width: 70,
    backgroundColor: '#112',
    color: '#f03',
    fontSize: 28,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 35,
  },
});
export default Scale;
