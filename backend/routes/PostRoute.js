import express from 'express';


import isAuth from '../middlewares/auth.js';
import { create, deletepost, getposts, updatepost } from '../controllers/PostController.js';

const PostRouter = express.Router();

PostRouter.post('/create', isAuth, create)
PostRouter.get('/getposts', getposts)
PostRouter.delete('/deletepost/:postId', isAuth, deletepost)
PostRouter.put('/updatepost/:postId', isAuth, updatepost)


export default PostRouter;