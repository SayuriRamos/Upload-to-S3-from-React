import React , {useState} from 'react';
import { uploadFile } from 'react-s3';
import './UploadImageToS3WithReactS3.css';



const S3_BUCKET =process.env.REACT_APP_BUCKET_NAME;
const REGION =process.env.REACT_APP_REGION;
const ACCESS_KEY =process.env.REACT_APP_ACCESS;
const SECRET_ACCESS_KEY =process.env.REACT_APP_SECRET;

window.Buffer = window.Buffer || require("buffer").Buffer;

const config = {
    bucketName: S3_BUCKET,
    region: REGION,
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY,
}

const UploadImageToS3WithReactS3 = () => {

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    const handleUpload = async (file) => {
        uploadFile(file, config)
            .then(data => console.log(data))
            .catch(err => console.error(err))
    }

    return <div style={{color: "coral", margin:20}} >
        <div style={{color: "BlueViolet"}}>React S3 File Upload</div>
        <p ></p>
        <input type="file" onChange={handleFileInput}/>
        <br></br>
        <p></p>
        <button style={{color: "black"}} id='button' onClick={() => handleUpload(selectedFile)}> Upload to S3</button>
    </div>
    
}

export default UploadImageToS3WithReactS3;