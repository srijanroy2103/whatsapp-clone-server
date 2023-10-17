import express from 'express';


import { addUser , getUsers } from '../controller/user-controller.js';

import { newConversation,getConversation } from '../controller/conversation-controller.js';
import { newMessage, getMessages } from '../controller/message-controller.js';


import { uploadFile,getImage } from '../controller/image-controller.js';


import upload from '../utils/upload.js';

const route = express.Router();

route.post('/add',addUser);

route.get('/users',getUsers);

route.post('/conversation/add',newConversation);

route.post('/conversation/get',getConversation);

route.post('/message/add',newMessage);

//here id is a variable and it can change
route.get('/message/get/:id' , getMessages);

//earlier we were just calling th e api just after calling the route 
//but now we are calling the middleware beacuse the data which we are sendin gis in chunks so we need to reorganize it and then cal the api
//file upload
route.post('/file/upload',upload.single("file"),uploadFile);
route.get('/file/:filename',getImage);


export default route;