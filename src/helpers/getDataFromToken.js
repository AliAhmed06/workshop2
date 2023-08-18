import jwt from 'jsonwebtoken';

export const getDataFromToken = (req) => {
    try {
        console.log("came 1");
        const token = req.cookies.get("token")?.value || '';
        console.log("came 2", token);
        const decodedToken = jwt.verify(token, process.env.NEXT_PUBLIC_TOKEN_SECRET);
        
        // it also has username and email in decoded token because we set these at the login time
        return decodedToken.id;
    } catch (error) {
        throw new Error("ali1"+error.message);
    }
}
