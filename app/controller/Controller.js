export default class Controller {
  success(data, httpCode = 200) {
    return {
      statusCode: httpCode,
      body: JSON.stringify(data),
    };
  }

  /**
   * Parse input data
   * @param {*} data j
   */
  parseData(data) {
    if (data === null || data === undefined) return [];
    try {
      return JSON.parse(data);
    } catch (error) {
      throw new Error("Request body is not a valid JSON")
    }
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