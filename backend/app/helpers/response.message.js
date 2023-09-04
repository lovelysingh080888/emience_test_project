exports.SuccessMessage = (res, message, statusCode, data = {}) => {
  res.status(statusCode).json({
    status: true,
    message,
    data: data,
  });
};

exports.ErrorMessage = (res, message, error = {}) => {
  if (error.name === "ValidationError") {
    let errors = {};

    error?.errors && Object.keys(error.errors).forEach((key) => {
      errors[key] = error.errors[key].message;
    });

    return res.status(200).json({
      status: false,
      message,
      errors,
    });
  }
  return res.status(200).json({
    status: false,
    message: error.message,
    error,
  });
};
