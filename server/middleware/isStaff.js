const jwt = require("jsonwebtoken");

const isStaff = (req, res, next) => {
  const authHeader = req.header("Authorization");
  const token = authHeader && authHeader.split(" ")[1];

  if (!token)
    return res
      .status(401)
      .json({ success: false, message: "Access token not found" });

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    req.role = decoded.role;
    console.log(req.role)
    if (req.role == "Staff") {
      next();
    } else {
      return res.status(401).json({ success: false, message: "NO PERMISSION" });
    }
  } catch (error) {
    console.log(error);
    return res.status(403).json({ success: false, message: "Invalid token" });
  }
};

module.exports = isStaff;
