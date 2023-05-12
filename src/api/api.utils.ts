export async function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else if (response.status === 401) {
    AuthenticationEventsEmitter.emit("AUTHENTICATION", "EXPIRED");
    return Promise.reject("Token expired");
  } else if (response.status === 500) {
    const error = new HttpError({}, "Internal Server Error");
    return Promise.reject(error);
  } else {
    const errorJson = await response.json();
    const error = new HttpError(errorJson, errorJson.message);
    error.response = response;
    return Promise.reject(error);
  }
}

export function parseJSON(response) {
  return response?.json?.();
}
