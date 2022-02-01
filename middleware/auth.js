import jwt from 'jsonwebtoken';
import 'dotenv/config';

export async function verifyToken(req, res, next) {
  try {
    const { authToken } = req.cookies;

    if (authToken === undefined) {
      return res.json({ loggedIn: false });
    }

    const data = await jwt.verify(authToken, process.env.SECRET);

    req.obj = {
      id: data.id,
      userName: data.userName,
    };

    next();
  } catch (err) {
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }
}
