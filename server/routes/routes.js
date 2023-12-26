// import express from 'express'
// import { uploadImage , downloadImage} from '../controller/image-controller.js'; 
// import upload from '../utils/upload.js';
// const router = express.Router();

// router.post('/upload', upload.single ('file'),uploadImage);
// router.get('/file/:fielId', downloadImage);

// export default router;

import express from 'express';
import upload from '../utils/upload.js';
import { uploadImage,  downloadImage} from '../controller/image-controller.js';

const router = express.Router();


router.post('/upload', upload.single('file'), uploadImage);
router.get('/file/:fileId', downloadImage);

export default router;