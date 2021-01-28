import React, { useEffect } from 'react';
import './Preview.css';
import { useSelector, useDispatch} from 'react-redux';
import { resetCameraImage, selectCameraImage } from "./features/cameraSlice";
import { useHistory } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';
import TextFieldIcons from '@material-ui/icons/TextFields';
import CreateIcon from '@material-ui/icons/Create';
import NoteIcon from '@material-ui/icons/Note';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import CropIcon from '@material-ui/icons/Crop';
import TimerIcon from '@material-ui/icons/Timer';
import SendIcon from '@material-ui/icons/Send';
import { v4 as uuid } from "uuid";
import { storage } from "./firebase";
import { db } from './firebase';
import firebase from 'firebase';


function Preview() {
    const cameraImage = useSelector(selectCameraImage);
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
     if (!cameraImage){
         history.replace('/')
     }
    }, [cameraImage, history]);
     
     const closePreview = () => { 
        dispatch(resetCameraImage()); 

        
    };
    const sendPost = () => {
        const id = uuid();
        const uploadTask = storage.ref(`posts/${id}`)
        .putString(cameraImage, "data_url");
        uploadTask.on('state_changed', null, 
        (error) => {
            console.log(error);
        },
        () => {
            storage.ref('posts').child(id).getDownloadURL().then((url) => {
                db.collection('posts').add({
                    imageUrl: url,
                    username : 'divoboy',
                    read : false,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                });
                history.replace("/chats");
            });
        }
        );
};
    return (
        <div className= "preview">
            
            <CloseIcon onClick = {closePreview} className='preview__close' />
            <div className="preview__toolbarRight">
            <TextFieldIcons />
            <CreateIcon />
            <NoteIcon />
            <AttachFileIcon />
            <CropIcon />
            <TimerIcon />
            </div>
            <img src={cameraImage} alt="" />
            <div onClick={sendPost} className="preview__footer">
                <h2>Send Now</h2>
                <SendIcon fontSize="small" className="preview__sendIcon" />
            </div>


        </div>
    );
}

export default Preview;

