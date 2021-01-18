import { Request, Response, NextFunction} from 'express'
interface Error {
  name: string
  message: string
}
const errorHandler = (error: Error, _req: Request, res: Response, next: NextFunction) => {
  console.log(error.message)
  
  if (error.name == 'CastError') {
    return res.status(400).send({error: 'malformatted id'})
  }

  next(error)
}

module.exports = errorHandler
