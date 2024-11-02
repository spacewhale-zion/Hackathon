// middleware/fetchuser.js
var jwt = require('jsonwebtoken');
const JWT_SECRET = "Aryanisagoo$dboy"; // Keep this secret in an environment variable in production

const fetchuser = (req, res, next) => {
  const token = req.header('auth-token'); // Adjust the header name as needed
  if (!token) {
    return res.status(401).send({ error: "Please authenticate using a valid token." });
  }

  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user; // Attach the user data to the request
    next();
  } catch (error) {
    res.status(401).send({ error: "Invalid token." });
  }
};

module.exports = fetchuser;
