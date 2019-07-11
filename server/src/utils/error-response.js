const successResponse = (res, code, data, status = 'success') => res.status(code).json({
  status,
  data,
});

const badRequestResponse = (res, error, status = 'error') => res.status(400).json({
  status,
  error: error || 'Bad request',
});

const conflictResponse = (res, error, status = 'error') => res.status(409).json({
  status,
  error: error || 'Conflict',
});

const internalErrREesponse = (res, error, status = 'error') => res.status(500).json({
  status,
  error: error || 'Internal Server Error',
});


export {
  successResponse, badRequestResponse, conflictResponse, internalErrREesponse,
};
