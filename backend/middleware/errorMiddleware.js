const notFoundMiddleware = (req, res, next) => {
  const error = new Error(`Route not found: ${req.originalUrl}`);
  error.statusCode = 404;
  next(error);
};

const errorMiddleware = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  if (err.name === 'CastError' && err.kind === 'ObjectId') {
    return res.status(400).json({
      success: false,
      message: 'Invalid MongoDB ObjectId'
    });
  }

  if (err.name === 'ValidationError') {
    return res.status(400).json({
      success: false,
      message: err.message
    });
  }

  if (err.code === 11000) {
    return res.status(400).json({
      success: false,
      message: 'Duplicate value entered'
    });
  }

  if (statusCode === 404) {
    return res.status(404).json({
      success: false,
      message: 'Resource not found'
    });
  }

  res.status(statusCode).json({
    success: false,
    message: statusCode === 500 ? 'Server error' : err.message
  });
};

module.exports = {
  errorMiddleware,
  notFoundMiddleware
};
