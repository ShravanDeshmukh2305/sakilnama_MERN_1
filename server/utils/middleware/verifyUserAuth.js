// import express from 'express';
// import jwt from 'jsonwebtoken';

// // Middleware to verify user authentication
// const verifyUserAuth = (req, res, next) => {

//   const token = req.cookies.user_jwt;
  
//   const secret = process.env.JWT_SECRET;
  
//   // Check if token exists
//   if (!token) {
//       return res
//       .status(401)
//       .json({ success: false, message: "Current user is not authenticated!" });
//     }
    
//     // Verify the token
//     jwt.verify(token, secret, async (err, decodedUser) => {
//         if (err) {
//             return res
//             .status(401)
//             .json({ success: false, message: "Invalid token!" });
//         } else {
//       req.decodedUser = decodedUser;
//       // Proceed to the next middleware or route handler
//       next();
//     }
//   });
// };

// export default verifyUserAuth;


import jwt from 'jsonwebtoken';

const verifyUserAuth = (req, res, next) => {
    const token = req.cookies.user_jwt;

    if (!token) {
        return res.status(401).json({ message: "Not authorized, no token" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Save the user data in the request object
        next();
    } catch (error) {
        return res.status(401).json({ message: "Not authorized, token failed" });
    }
};

export default verifyUserAuth;

