
import React, {useEffect, useState} from 'react';
import {View, Text, Button, PermissionsAndroid, Platform} from 'react-native';
import Torch from 'react-native-torch'; // For controlling flashlight
import {VoiceProcessor} from '@picovoice/react-native-voice-processor'; // For capturing audio in real-time

const VoiceToFlash = () => {
  const [flashlightOn, setFlashlightOn] = useState(false);
  const [isListening, setIsListening] = useState(false);
var voiceProcessor = VoiceProcessor.instance;
  // Request microphone permission
  const requestMicrophonePermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        {
          title: 'Microphone Permission',
          message: 'App needs access to your microphone to detect claps.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } else {
      return true;
    }
  };

  useEffect(() => {
    // Start listening for claps when component mounts
    startListeningForClap();
    return () => {
      // Clean up: stop the audio processor when the component unmounts
      stopListeningForClap();
    };
  }, []);

    const startListeningForClap = async () => {
      console.log('volume');
    const hasPermission = await requestMicrophonePermission();
    if (!hasPermission) {return;}


    voiceProcessor.addFrameListener((frame: any[]) => {
      // Here you would need to implement sound analysis to detect a "clap"
      // For example, you can analyze the frame data and look for sharp spikes in volume
      const volume = calculateVolume(frame); // Function to calculate volume
        console.log(volume);
      if (volume > 0.8) {
        toggleFlashlight();
      }
    });

    voiceProcessor.start(16000, 512); // Start listening (16kHz, 512 buffer size)
    setIsListening(true);
  };

  const stopListeningForClap = () => {
    voiceProcessor.stop(); // Stop listening
    setIsListening(false);
  };

  const toggleFlashlight = () => {
    setFlashlightOn(prevState => !prevState);
    Torch.switchState(!flashlightOn); // Toggle flashlight
  };

  const calculateVolume = (frame: any[]) => {
    // Basic way to calculate volume (average amplitude)
    const sumSquares = frame.reduce((sum, sample) => sum + sample * sample, 0);
    const rms = Math.sqrt(sumSquares / frame.length);
    return rms;
  };

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Clap to turn {flashlightOn ? 'off' : 'on'} the flashlight!</Text>
      <Button
        title={isListening ? 'Stop Listening' : 'Start Listening'}
        onPress={isListening ? stopListeningForClap : startListeningForClap}
      />
    </View>
  );
};

export default VoiceToFlash;

