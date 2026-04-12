import { clerkClient } from '@clerk/clerk-sdk-node';

const protect = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({ success: false, message: 'Unauthorized' });
    }

    const payload = await clerkClient.verifyToken(token);
    req.userId = payload.sub;
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: 'Invalid token' });
  }
};

export default protect;