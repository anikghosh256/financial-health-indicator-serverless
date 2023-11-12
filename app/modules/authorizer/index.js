"use strict";

export async function jwtCheck(event, context) {
  const authorizationHeader = event.headers && event.headers['authorization'];

  const response = {
    principalId: 'test',
    policyDocument: {
      Statement: [
        {
          Action: 'execute-api:Invoke',
          Effect: 'Allow',
          Resource: '*',
        },
      ],
    },
  };


  return response;
};