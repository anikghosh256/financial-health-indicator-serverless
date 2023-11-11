"use strict";

export async function home(event) {
  const welcome = {
    message: "Welcome to the serverless-prisma-blog example!",
    documentation: "Working with Prisma and Serverless",
  };

  return {
    statusCode: 200,
    body: JSON.stringify(welcome),
  };
}
