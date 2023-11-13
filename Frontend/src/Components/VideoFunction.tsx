import React, { useEffect, useRef } from "react";
import { useReactMediaRecorder } from "react-media-recorder";

const RecordView: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const {
        status,
        startRecording,
        stopRecording,
        mediaBlobUrl
    } = useReactMediaRecorder({ video: true });

    useEffect(() => {
        const startWebcam = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            } catch (error) {
                console.error("Error accessing webcam:", error);
            }
        };

        startWebcam();
    }, []);

    return (
        <div>
          
            <div>
                <video width="350" height="180"
                    ref={videoRef}
                    autoPlay
                    muted
                />
            </div>
            {mediaBlobUrl && (
                <div>
                    <p>Recorded Video:</p>
                    <video
                        src={mediaBlobUrl}
                        controls
                        autoPlay
                        loop
                    />
                </div>
            )}
              <p>{status}</p>
            <button onClick={startRecording}>Start Recording</button>
            <button onClick={stopRecording}>Stop Recording</button>
        </div>
    );
};

export default RecordView;
