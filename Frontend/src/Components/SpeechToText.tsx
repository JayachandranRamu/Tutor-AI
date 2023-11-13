import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Dictaphone= () => {
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

    const startListen = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
console.log(transcript)
    return (
        <div>
            <p>Microphone: {listening ? 'on' : 'off'}</p>
            <button onClick={startListen}>Start</button>
            <button onClick={SpeechRecognition.stopListening}>Stop</button>
            <button onClick={resetTranscript}>Reset</button>
            <p>{transcript}</p>
        </div>
    );
};

export default Dictaphone;
