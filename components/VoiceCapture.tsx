import React, {useState} from 'react';
import {View, Button, Text, PermissionsAndroid} from 'react-native';
import {VoiceProcessor} from '@picovoice/react-native-voice-processor';

const VoiceCapture = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioData, setAudioData] = useState([]);
  const Voice = VoiceProcessor.instance;
  // Request microphone permission (for Android)
  const requestMicrophonePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        {
          title: 'Microphone Permission',
          message:
            'This app needs access to your microphone to process voice input.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  };

  const startRecording = async () => {
    const hasPermission = await requestMicrophonePermission();
    if (!hasPermission) {
      return;
    }

    // Voice Processor settings
    const frameLength = 400;
    const sampleRate = 4000; // Required sample rate for most voice recognition systems

    try {
      // Start recording with the Voice Processor
      await Voice.start(frameLength, sampleRate);

      // Listen to incoming audio frames
      Voice.addFrameListener(frame => {
        //console.log('Audio Frame: ', frame);
        //console.log(frame);
        let value = calculateVolume(frame);
        if (value > 1000) {
          console.log(value);
        }
        //setAudioData(prev => [...(prev || []), ...frame]);
      });

      setIsRecording(true);
    } catch (error) {
      console.error('Failed to start recording', error);
    }
  };

  const calculateVolume = (frame: any[]) => {
    // Basic way to calculate volume (average amplitude)
    const sumSquares = frame.reduce((sum, sample) => sum + sample * sample, 0);
    const rms = Math.sqrt(sumSquares / frame.length);
    return rms;
  };

  const stopRecording = () => {
    Voice.stop();
    setIsRecording(false);
  };

  return (
    <View>
      <Text>
        {isRecording ? 'Recording...' : 'Press the button to start recording.'}
      </Text>

      <Button title="Start Recording" onPress={startRecording} />

      <Button title="Stop Recording" onPress={stopRecording} />

      <Text>
        Audio Data: {audioData ? audioData.length : 0} frames captured.
      </Text>
    </View>
  );
};

export default VoiceCapture;
