import { generateToken } from "../utils/helperFun/generateToken.js";
import User from '../models/userSchema.js';
import bcrypt from 'bcrypt';

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Check if the password is correct
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Generate JWT token
        const payload = {
            email: user.email,
            userId: user._id,
        };
        const token = generateToken(payload);

        // Set the token in a cookie
        res.cookie("user_jwt", token, {
            httpOnly: true,
            secure: 'none', // Change to true in production
            sameSite: 'none',
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
            path: '/',
        });

        // Sending response
        res.status(200).json({
            message: "User logged in successfully",
            success: true,
            user: { email: user.email, userName: user.userName, profilePic: user.profilePic }
        });

    } catch (err) {
        console.error("Error in the auth controller:", err);
        res.status(500).json({ message: "Error in login, try again later" });
    }
};
