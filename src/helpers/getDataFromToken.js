import jwt from 'jsonwebtoken';

export const getDataFromToken = (req) => {
    try {
        const token = req.cookies.get("token")?.value || '';
        const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
        
        // it also has username and email in decoded token because we set these at the login time
        return decodedToken.id;
    } catch (error) {
        throw new Error(error.message);
    }
}
