const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  try {
    if (req.user.email == 'admin') {
      next();
    } else {
      throw Error;
    }
  } catch (error) {
    console.error(error);
    error.message = 'You do not have access to view this page';
    error.status = 403;
    next(error);
  }
};
