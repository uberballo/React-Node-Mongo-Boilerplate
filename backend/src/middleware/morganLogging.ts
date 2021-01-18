import {Request, Response} from 'express'
import {TokenIndexer} from 'morgan'
const morganLogging = (
  tokens: TokenIndexer<Request, Response>,
  req: Request,
  res: Response
) => {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'),
    '-',
    tokens['response-time'](req, res),
    'ms',
    JSON.stringify(req.body),
  ].join(' ')
}

module.exports = morganLogging
