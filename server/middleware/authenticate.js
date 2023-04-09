const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");

const Authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.jwtoken;

    // Check if token is present
    if (!token) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    // Verify token
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

    // Find user with the matching token
    const rootUser = await User.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });

    // Check if user exists
    if (!rootUser) {
      throw new Error("User not found");
    }

    req.token = token;
    req.rootUser = rootUser;
    req.userId = rootUser._id;

    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({ error: "Unauthorized" });
  }
};

module.exports = Authenticate;
