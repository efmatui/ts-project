import express, { NextFunction } from 'express';
export default (schema: any) => {
  return (req: express.Request, res: express.Response, next: NextFunction) => {
    const { error } = schema.validate(req.params)
    const valid = error == null
    if (valid) {
      next()
    } else {
      const { details } = error
      const errorsDetail = details.map((i: any) => i.message)
      res.status(422).json({
        status: false,
        error: errorsDetail
      })
    }
  }
}