"use strict";

import JwtService from "../user/JwtService.js";

export async function jwtCheck(event, context) {
  const authorizationHeader = event.headers && event.headers['authorization'];
  const token = authorizationHeader && authorizationHeader.split(' ')[1];
  const jwtService = new JwtService();
  if (!token) {
    throw new Error('Unauthorized');
  }

  const decoded = await jwtService.verifyToken(token);

  if (!decoded) {
    throw new Error('Unauthorized');
  }

  const response = {
    principalId: decoded.id,
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