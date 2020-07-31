import { Response } from 'express'

class StatusResponse {
  created (res: Response, id: object): void {
    res.status(201).json({
      id: id
    })
  }

  ok (res: Response, data: object): void {
    res.status(200).json({
      data
    })
  }

  emptyOk (res: Response): void {
    res.status(200).send()
  }

  badRequest (res: Response, error: unknown): void {
    res.status(400).json({
      errorMessage: error
    })
  }

  notFound (res: Response, error: unknown): void {
    res.status(404).json({
      errorMessage: error
    })
  }
}

export default new StatusResponse()