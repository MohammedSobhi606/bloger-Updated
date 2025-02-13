import jwt from "jsonwebtoken";

// Middleware function to validate JWT token

const adminauth = (req, res, next) => {
  const { token } = req.headers;

  if (!token) return res.status(401).send("no token provided");

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const password = decoded.password;
    const email = decoded.email;
    if (
      email !== process.env.ADMIN_EMAIL &&
      password !== process.env.ADMIN_PASSWORD
    ) {
      res.status(401).send("Access denied");
    } // Pass token to next middleware function
    next();
  } catch (err) {
    res.status(403).send("Token is not valid");
  }
};

export default adminauth;
