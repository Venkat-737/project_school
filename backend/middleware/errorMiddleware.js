const errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  // Set a default status code if none has been set
  const statusCode = res.statusCode || 500;

  // Set the status and send the error response
  res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export { errorHandler };
