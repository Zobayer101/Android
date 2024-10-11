import {
  Text,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Modal,
  TouchableWithoutFeedback,
  //Alert,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

import Caret from 'react-native-vector-icons/AntDesign';
import Arrowup from 'react-native-vector-icons/AntDesign';
import Arrowdown from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

const Scale = () => {
  //all state
  const [unit, setUnit] = useState('temperature');
  const [modal, setModal] = useState('');
  const [data, setData] = useState('');
  const [item1, setItem1] = useState('Celius');
  const [item2, setItem2] = useState('Fahrenheit');
  const [focus, setFocus] = useState(true);
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [itemInput1, setItemInput1] = useState('');
  const [itemInput2, setItemInput2] = useState('');
  const upInput = useRef<any>(null);
  const downInput = useRef<any>(null);
  // const obj = [{temperature: {Celius: 'Celius', Fahrenheit: 'Fahrenheit', Kalvin: 'Kalvin'}}];

  useEffect(() => {
    const isFloat = (d: number) => {
      return !!(d % 1);
    };
    if (itemInput1 === 'Celius' && itemInput2 === 'Fahrenheit') {
      let result = (Number(data) * 9) / 5 + 32;
      if (!isNaN(result)) {
        // Alert.alert('first');
        if (isFloat(result)) {
          focus
            ? setInput2(result.toFixed(4).toString())
            : setInput1(result.toFixed(4).toString());
        } else {
          focus ? setInput2(result.toString()) : setInput1(result.toString());
        }
      }
      //setValue(result.toString());
    } else if (itemInput1 === 'Fahrenheit' && itemInput2 === 'Celius') {
      //Alert.alert('last');
      let resultx = ((Number(data) - 32) * 5) / 9;
      if (!isNaN(resultx)) {
        if (isFloat(resultx)) {
          focus
            ? setInput2(resultx.toFixed(4).toString())
            : setInput1(resultx.toFixed(4).toString());
        } else {
          focus ? setInput2(resultx.toString()) : setInput1(resultx.toString());
        }
      }
      //setValue(resultx.toString());
    } else if (itemInput1 === 'Kalvin' && itemInput2 === 'Celius') {
      let resultx = Number(data) - 213.15;
      if (!isNaN(resultx)) {
        if (isFloat(resultx)) {
          focus
            ? setInput2(resultx.toFixed(4).toString())
            : setInput1(resultx.toFixed(4).toString());
        } else {
          focus ? setInput2(resultx.toString()) : setInput1(resultx.toString());
        }
      }
    } else if (itemInput1 === 'Celius' && itemInput2 === 'Kalvin') {
      let resultx = Number(data) + 213.15;
      if (!isNaN(resultx)) {
        if (isFloat(resultx)) {
          focus
            ? setInput2(resultx.toFixed(4).toString())
            : setInput1(resultx.toFixed(4).toString());
        } else {
          focus ? setInput2(resultx.toString()) : setInput1(resultx.toString());
        }
      }
    } else if (itemInput1 === 'Fahrenheit' && itemInput2 === 'Kalvin') {
      let resultx = ((Number(data) + 32) * 5) / 9 + 273.15;
      if (!isNaN(resultx)) {
        if (isFloat(resultx)) {
          focus
            ? setInput2(resultx.toFixed(4).toString())
            : setInput1(resultx.toFixed(4).toString());
        } else {
          focus ? setInput2(resultx.toString()) : setInput1(resultx.toString());
        }
      }
    } else if (itemInput1 === 'Kalvin' && itemInput2 === 'Fahrenheit') {
      let resultx = 1.8 * (Number(data) - 273.15) + 32;
      if (!isNaN(resultx)) {
        if (isFloat(resultx)) {
          focus
            ? setInput2(resultx.toFixed(4).toString())
            : setInput1(resultx.toFixed(4).toString());
        } else {
          focus ? setInput2(resultx.toString()) : setInput1(resultx.toString());
        }
      }
    } else {
      focus ? setInput2(data) : setInput1(data);
    }
  }, [data, itemInput1, itemInput2, focus]);
  //
  useEffect(() => {
    if (focus) {
      setInput1(data);

      setItemInput1(item1);
      setItemInput2(item2);
    } else {
      setInput2(data);

      setItemInput1(item2);
      setItemInput2(item1);
    }
  }, [focus, data, input1, item1, item2, input2]);
  //
  const FistFocus = () => {
    setFocus(true);
    setData(input1);
    upInput.current?.focus();
    //Alert.alert('First Focus');
  };
  const FocusOnLast = () => {
    setFocus(false);
    setData(input2);
    downInput.current?.focus();
    //Alert.alert('focus last');
  };

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
          <Text style={style.outerMtext} onPress={() => setModal('up')}>
            {item1} <Caret name="caretdown" color={'#fff'} size={20} />
          </Text>
          <Modal
            animationType="fade"
            transparent={true}
            onRequestClose={() => setModal('')}
            visible={modal === 'up' ? true : false}>
            <TouchableWithoutFeedback onPress={() => setModal('')}>
              <View style={style.Modal}>
                <Text
                  style={
                    item1 === 'Celius' ? style.colorModel : style.ModelText
                  }
                  onPress={() => {
                    setItem1('Celius');
                    setModal('');
                  }}>
                  Celius
                </Text>
                <Text
                  style={
                    item1 === 'Fahrenheit' ? style.colorModel : style.ModelText
                  }
                  onPress={() => {
                    setItem1('Fahrenheit');
                    setModal('');
                  }}>
                  Fahrenheit
                </Text>
                <Text
                  style={
                    item1 === 'Kalvin' ? style.colorModel : style.ModelText
                  }
                  onPress={() => {
                    setItem1('Kalvin');
                    setModal('');
                  }}>
                  Kalvin
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
          <View style={style.InputBox}>
            <TextInput
              selectionColor="#35fd03"
              showSoftInputOnFocus={false}
              style={style.inputArea}
              onFocus={FistFocus}
              value={input1}
              ref={upInput}
            />
            <Text style={style.Smalltext}>
              {item1 === 'Celius' ? '°C' : item1 === 'Fahrenheit' ? '°F' : 'K'}
            </Text>
          </View>
          <View style={style.Hr} />
          <Text style={style.outerMtext} onPress={() => setModal('down')}>
            {item2} <Caret name="caretdown" color={'#fff'} size={20} />
          </Text>
          <Modal
            animationType="fade"
            transparent={true}
            onRequestClose={() => setModal('')}
            visible={modal === 'down' ? true : false}>
            <TouchableWithoutFeedback onPress={() => setModal('')}>
              <View style={style.Modelnext}>
                {/* ------------------------------------------------------------- */}
                <Text
                  style={
                    item2 === 'Celius' ? style.colorModel : style.ModelText
                  }
                  onPress={() => {
                    setItem2('Celius');
                    setModal('');
                  }}>
                  Celius
                </Text>
                <Text
                  style={
                    item2 === 'Fahrenheit' ? style.colorModel : style.ModelText
                  }
                  onPress={() => {
                    setItem2('Fahrenheit');
                    setModal('');
                  }}>
                  Fahrenheit
                </Text>
                <Text
                  style={
                    item2 === 'Kalvin' ? style.colorModel : style.ModelText
                  }
                  onPress={() => {
                    setItem2('Kalvin');
                    setModal('');
                  }}>
                  Kalvin
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
          <View style={style.InputBox}>
            <TextInput
              selectionColor="#35fd03"
              showSoftInputOnFocus={false}
              style={style.inputArea}
              onFocus={FocusOnLast}
              value={input2}
              ref={downInput}
            />
            <Text style={style.Smalltext}>
              {item2 === 'Celius' ? '°C' : item2 === 'Fahrenheit' ? '°F' : 'K'}
            </Text>
          </View>
          <View style={style.Hr} />
        </View>
      </ScrollView>
      <View style={style.ButtonStyle}>
        {/* 1 no: Row */}
        <View style={style.BTNset}>
          <TouchableOpacity onPress={() => setData(a => (a += 7))}>
            <Text style={style.BTNtext}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setData(a => (a += 8))}>
            <Text style={style.BTNtext}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setData(a => (a += 9))}>
            <Text style={style.BTNtext}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setData(data.toString().slice(0, -1))}>
            <Text style={style.BTNtext}>
              <Feather name="delete" size={27} color={'#0f3'} />
            </Text>
          </TouchableOpacity>
        </View>
        {/* 2 no: Row */}
        <View style={style.BTNset}>
          <TouchableOpacity onPress={() => setData(a => (a += 4))}>
            <Text style={style.BTNtext}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setData(a => (a += 5))}>
            <Text style={style.BTNtext}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setData(a => (a += 6))}>
            <Text style={style.BTNtext}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setData('')}>
            <Text style={style.Ctext}>C</Text>
          </TouchableOpacity>
        </View>
        {/* 3 no:Row */}
        <View style={style.BTNset}>
          <TouchableOpacity onPress={() => setData(a => (a += 1))}>
            <Text style={style.BTNtext}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setData(a => (a += 2))}>
            <Text style={style.BTNtext}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setData(a => (a += 3))}>
            <Text style={style.BTNtext}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            // disabled={focus ? false : true}
            onPress={FistFocus}>
            <Text style={style.BTNtext}>
              <Arrowup
                name="arrowup"
                size={28}
                color={focus ? '#253' : '#0f3'}
              />
            </Text>
          </TouchableOpacity>
        </View>
        {/* 4 no: Row */}
        <View style={style.BTNset}>
          <TouchableOpacity onPress={() => setData(a => (a += '-'))}>
            <Text style={style.BTNtext}>+/-</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setData(a => (a += 0))}>
            <Text style={style.BTNtext}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setData(a => (a += '.'))}>
            <Text style={style.BTNtext}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity
            //disabled={focus ? false : true}
            onPress={FocusOnLast}>
            <Text style={style.BTNtext}>
              <Arrowdown
                name="arrowdown"
                size={29}
                color={focus ? '#0f3' : '#253'}
              />
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
    width: 200,
    marginLeft: 5,
    position: 'relative',
  },
  Smalltext: {
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
    width: 200,
    //display: 'none',
    borderRadius: 10,
    marginTop: 50,
    backgroundColor: '#333',
    zIndex: 1,
  },
  Modelnext: {
    width: 200,
    marginTop: 200,
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
  colorModel: {
    position: 'relative',
    width: 200,
    height: 50,
    fontSize: 20,
    color: '#0f3',
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
