import express from 'express'
import authRoutes from './authRoutes.js'
import projectRoutes from './projectRoutes.js'
import widgetRoutes from './widgetRoutes.js'
import userRoutes from './userRoutes.js'

const router   = express.Router()

//for authentication routes
router.use('/auth',authRoutes)
router.use('/project',projectRoutes)
router.use('/widget',widgetRoutes)
router.use('/user',userRoutes)
router.post('/api/login', login);
router.post('/api/register', register);
router.get('/api/logout', verifyUserAuth, logout);
router.get('/api/auth/check', verifyUserAuth, authCheck);


export default router;
