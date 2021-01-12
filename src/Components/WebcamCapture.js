import React, { useRef }from 'react';
import WebCam from 'react-webcam';


const videoConstraints = {
    width: 250,
    height: 400,
    facingMode: "user"
  };

function WebcamCapture() {

     const webcamRef = useRef(null);
    return (
        <div className='WebcamCapture'>
            <WebCam 
            audio={false}
            height={videoConstraints.height}
            width={videoConstraints.width}
            ref={webcamRef}
            screenshotFormat='image/jpeg'
            videoConstraints={videoConstraints}

            />
        </div>
    )
}

export default WebcamCapture;
