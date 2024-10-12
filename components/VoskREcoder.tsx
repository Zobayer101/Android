import React, {useState, useEffect} from 'react';
import {View, Button, Text} from 'react-native';
import {VoiceProcessor} from '@picovoice/react-native-voice-processor'; // Import the Picovoice processor
import vosk from 'react-native-vosk'; // Import Vosk for offline speech-to-text

const VoskREcoder = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcription, setTranscription] = useState('');
    const vp = VoiceProcessor.instance;
    const Vosk = new vosk();
  // Initialize Vosk model and recognizer
  useEffect(() => {
    const loadModel = async () => {
      await Vosk.init(); // Initialize Vosk
      await Vosk.loadModel('path_to_your_model.zip'); // Load Vosk model (provide path to your model)
    };

    loadModel();
  }, []);

  // Handle speech results
  const handleResult = (result: { text: React.SetStateAction<string>; }) => {
    if (result.text) {
      setTranscription(result.text);
    }
  };

  const startListening = async () => {
    setIsListening(true);
    vp.subscribe(data => {
      Vosk.acceptWaveform(data); // Send the audio data to Vosk for processing
    });

    Vosk.on('partialResult', handleResult); // Listen to partial transcription results
    Vosk.on('result', handleResult); // Final transcription result
    vp.start(16000, 1); // Start voice processor (16kHz, mono channel)
  };

  const stopListening = () => {
    setIsListening(false);
    vp.stop();
    Vosk.stop(); // Stop Vosk recognition
  };

  return (
    <View>
      <Button
        title={isListening ? 'Stop Listening' : 'Start Listening'}
        onPress={isListening ? stopListening : startListening}
      />
      <Text>Transcription: {transcription}</Text>
    </View>
  );
};

export default VoskREcoder;
