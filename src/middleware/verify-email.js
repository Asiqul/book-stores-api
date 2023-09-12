const verifyEmail = (req, res, next) => {
  const regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
  const email = req.body.email;
  const result = regex.test(email);
  try {
    if (result) {
      next();
    } else {
      res.status(400).json({
        status: 'Bad Request',
        message: 'Format email tidak valid',
      });
    }
  } catch (error) {
    return error;
  }
};

module.exports = verifyEmail;
