import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  PermissionsAndroid,
  Platform,
  StyleSheet,
} from 'react-native';
import Voice from '@react-native-community/voice';

const VoiceToText = () => {
  const [recognized, setRecognized] = useState('');
  const [started, setStarted] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechRecognized = onSpeechRecognized;
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechError = onSpeechError;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const onSpeechStart = (e: any) => {
    console.log('onSpeechStart: ', e);
    setStarted('Started');
  };

  const onSpeechRecognized = (e: any) => {
    console.log('onSpeechRecognized: ', e);
    setRecognized('Recognized');
  };

  const onSpeechResults = (e: any) => {
    console.log('onSpeechResults: ', e);
    setResults(arr => [...arr, e.value]);
  };

  const onSpeechError = (e: any) => {
    console.log('onSpeechError: ', e.error);
  };

  const startRecording = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
          {
            title: 'Microphone Permission',
            message:
              'We need to access your microphone to recognize your speech.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Microphone permission granted');

          //return granted === PermissionsAndroid.RESULTS.GRANTED;
        } else {
          console.log('Microphone permission denied');
          return;
        }
      } catch (err) {
        console.warn(err);
        return;
      }
    }

    try {
      console.log('OK this is start');
      await Voice.start('en-US'); // Start speech recognition (set language as needed)
      // setResults([]); // Clear previous results
    } catch (e) {
      console.error(e);
    }
  };

  const stopRecording = async () => {
    try {
      await Voice.stop(); // Stop speech recognition
      setStarted('Stop');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View style={Style.allView}>
      <Text>Started: {started}</Text>
      <Text>Recognized: {recognized}</Text>
      <Text>Results: </Text>
      {results.map((value, index) => (
        <Text key={index}>{value}</Text>
      ))}

      <Button title="Start Recording" onPress={startRecording} />
      <Button title="Stop Recording" onPress={stopRecording} />
    </View>
  );
};

const Style = StyleSheet.create({
  allView: {padding: 20},
});
export default VoiceToText;
