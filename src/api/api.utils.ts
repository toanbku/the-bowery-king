class HttpError extends Error {
  constructor(errorJson = {}, ...params: string[]) {
    // Pass remaining arguments (including vendor specific ones) to parent constructor
    super(...params);

    // Maintain stack trace
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, HttpError);
    }

    this.name = "HttpError";
  }
}

export async function checkStatus(response: Response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = `${response.status}: ${response.statusText}`;
    return Promise.reject(error);
  }
}
