const User = require("../model/userSchema");
const jwt = require("jsonwebtoken");

const Authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    const verified = jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findOne({ _id: verified._id });

    if (!user) {
      throw new Error();
    }

    req.token = token;
    req.rootUser = user;
    req.userId = user._id;

    next();
  } catch (err) {
    res.status(401).json({ error: "Unauthorized access." });
  }
};

module.exports = Authenticate;
