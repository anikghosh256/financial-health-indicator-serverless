export default class Controller{
  success(data, httpCode = 200) {
    return {
      statusCode: httpCode,
      body: JSON.stringify(data),
    };
  }

  error(data, httpCode = 500) {
    const error = new Error(data);
    return {
      statusCode: httpCode,
      body: JSON.stringify({
        name: error.name,
        error: error.message,
        stack: error.stack,
      }),
    };
  }
}