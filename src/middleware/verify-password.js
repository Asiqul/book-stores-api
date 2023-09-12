const verifyPassword = (req, res, next) => {
  const regex = new RegExp(
    '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,})'
  );
  const password = req.body.password;
  const result = regex.test(password);
  try {
    if (result) {
      next();
    } else {
      res.status(400).json({
        status: 'Bad Request',
        message: 'Format password tidak valid',
      });
    }
  } catch (error) {
    return error;
  }
};

module.exports = verifyPassword;
