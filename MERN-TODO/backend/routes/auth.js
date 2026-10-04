import { Router } from "express";
import User from '../models/User.js'
import bcrypt from 'bcrypt'

const router = Router();
// Sign Up
router.post('/register', async (req,res) => {
    try {
        const {username, email, password} = req.body;
        const hashPassword = await bcrypt.hash(password,10)   // password is hashed with salt & scrambling( as 8, 10, 12, 14)
        const user = new User({username, email, password:hashPassword});
        await user.save();
        res.status(200).json({user: user})
    } catch (error) {
        console.log(error)
        if (error.code === 11000) {
        return res.status(400).json({ message: 'User already existed!' });
    }
        res.status(500).json({ message: error.message });
    }
})

// Sign In
router.post('/signin', async (req,res) => {
    try {
        const user = await User.findOne({email: req.body.email});
        if (!user) {
            return res.status(400).json({ message: 'Please Sign Up First ...' });
        }
        const IsPasswordCorrect = bcrypt.compareSync( req.body.password, user.password )
        if (!IsPasswordCorrect) {
            return res.status(400).json({ message: 'Password Is Incorrect :)' });
        }
        const { password, ...others } = user._doc;  // takes password and do not show
        res.status(200).json({ others });           // show other 2 data instead of password
    } catch (error) {
        console.log(error)
        if (error.code === 11000) {
        return res.status(400).json({ message: 'User already existed!' });
    }
        res.status(500).json({ message: error.message });
    }
})

export default router