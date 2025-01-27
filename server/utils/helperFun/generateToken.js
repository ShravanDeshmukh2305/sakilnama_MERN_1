import jwt from 'jsonwebtoken'


export const generateToken = ( payload )  => {

    return jwt.sign(payload, process.env.JWT_SECRET , { expiresIn: '20d' });
    
};


// import jwt from 'jsonwebtoken';

// export const generateToken = (payload) => {
//     return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '7d' });
// };
