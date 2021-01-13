import React, { useRef, useCallback } from 'react';
import Webcam from 'react-webcam';
import '../Components/WebcamCapture.css';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { useDispatch } from 'react-redux';
import { setCameraImage } from '../features/cameraSlice';
import { useHistory } from "react-router-dom";


const videoConstraints = {
    width: 250,
    height: 400,
    facingMode: "user"
};

function WebcamCapture(){
    const webcamRef = useRef(null);
    const dispatch = useDispatch();
    //need to push image to history when we capture, it will redirect to different path
    const history = useHistory();
  
    const capture = useCallback(() => {
            const imageSrc = webcamRef.current.getScreenshot();
            dispatch(setCameraImage(imageSrc));
            history.push('/preview');
    }, [webcamRef]);

    return(
        <div className="webcamCapture">
            <Webcam 
            audio={false}
            height={videoConstraints.height}
            width={videoConstraints.width}
            ref={webcamRef}
            screenshotFormat='image/jpeg'
            videoConstraints={videoConstraints}
            />

            <RadioButtonUncheckedIcon 
            className='webcamCapture__button'
            onClick={capture}
            fontSize='large'
            />
        </div>
    );
}

export default WebcamCapture;
