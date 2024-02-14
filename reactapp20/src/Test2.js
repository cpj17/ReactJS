import React, { useState, useRef } from 'react';
import RecordRTC from 'recordrtc';

function App() {
  const [recording, setRecording] = useState(false);
  const [stream, setStream] = useState(null);
  const [recordedBlob, setRecordedBlob] = useState(null);
  const videoRef = useRef(null);
  const recorderRef = useRef(null);

  const startRecording = async () => {
    try {
      const cameraStream = await navigator.mediaDevices.getUserMedia({ video: true });

      setStream(cameraStream);

      const recorder = new RecordRTC(cameraStream, {
        type: 'video',
      });

      recorderRef.current = recorder;

      recorder.startRecording();
      setRecording(true);

      recorder.stream = cameraStream;
    } catch (error) {
      console.error('Error starting recording:', error);
    }
  };

  const stopRecording = () => {
    if (recorderRef.current) {
      recorderRef.current.stopRecording(() => {
        const blob = recorderRef.current.getBlob();
        setRecording(false);
        setStream(null);
        setRecordedBlob(blob);
        videoRef.current.src = URL.createObjectURL(blob);
      });
    }

    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }
  };

  return (
    <div>
      <h1>Camera Recorder</h1>
      <div>
        {recording ? (
          <button onClick={stopRecording}>Stop Recording</button>
        ) : (
          <button onClick={startRecording}>Start Recording</button>
        )}
      </div>
      <div>
        {recordedBlob && (
          <video ref={videoRef} autoPlay controls style={{ width: '100%', marginTop: '20px' }}>
            <source src={URL.createObjectURL(recordedBlob)} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  );
}

export default App;
