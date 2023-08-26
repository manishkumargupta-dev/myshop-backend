const errorHandler = (err, req, res, next) => {
  const { status = 500, message = "Something went wrong" } = err;

  // If Mongoose not found error, set to 404 and change message
  if (err.name === "CastError" && err.kind === "ObjectId") {
    status = 404;
    message = "Resource not found";
  }

  res.status(status).json({
    error: status,
    message: message,
  });
};

export { errorHandler };
