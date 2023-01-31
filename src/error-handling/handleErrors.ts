import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import ApiError from './ApiError';

// https://github.com/zeit/micro#error-handling
const handleErrors =
  (fn: NextApiHandler) => async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      return await fn(req, res);
    } catch (err) {
      let statusCode = 500;
      let message = 'Oops, something went wrong!';
      if (err instanceof ApiError) {
        // eslint-disable-next-line prefer-destructuring
        statusCode = err.statusCode;
        // eslint-disable-next-line prefer-destructuring
        message = err.message;
      }
      res.status(statusCode).json({ statusCode, message });
    }
  };

export default handleErrors;
