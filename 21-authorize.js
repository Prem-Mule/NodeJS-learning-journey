const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user == "prem") {
    req.user = { name: "Prem", id: 1 };
    next();
  } else {
    res.status(401).send("<h2>Unauthorized</h2>");
  }
};

module.exports = authorize;
