import express from 'express';

import isAuth from '../middlewares/auth.js';
import { createComment, deleteComment, editComment, getcomments, getPostComments, likeComment } from '../controllers/CommentController.js';


const CommentRouter = express.Router();

CommentRouter.post('/create', isAuth, createComment);
CommentRouter.get('/getPostComments/:postId', getPostComments);
CommentRouter.put('/likeComment/:commentId', isAuth, likeComment);
CommentRouter.put('/editComment/:commentId', isAuth, editComment);
CommentRouter.delete('/deleteComment/:commentId', isAuth, deleteComment);
CommentRouter.get('/getcomments', isAuth, getcomments);

export default CommentRouter;