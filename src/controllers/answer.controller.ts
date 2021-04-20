import Answer from '../models/answer.model'
import { Request, Response } from 'express'

const createAnswer = (req: Request, res: Response) => {
  try {
    let answer = new Answer({
      form_id: req.body.form_id,
      user_prop_id: req.body.user_prop_id,
      author: req.body.author,
      date: req.body.date,
      answers: req.body.answers
    })

    answer.save()
    .then((answer: any) => {
      return res.status(200).json({
        message: "success in responding"
      })
    })
    .catch((error: any) => {
      return res.status(400).json({
        messageError: error
      })
    })
  } catch (error: any) {
    return res.status(400).json({
      messageError: error
    })
  }
}

const getAnswer = async (req: Request, res: Response) => {
  try {
    const answer: any = await Answer.find({ form_id: req.query.idForm }).exec()
    
    if (answer != null) {
      return res.status(200).json({
        result: answer
      })
    } else {
      return res.status(400).json({
        messageError: "0 replies"
      })
    }
  } catch (error: any) {
    return res.status(400).json({
      messageError: error
    })
  }
}

export default {
  createAnswer,
  getAnswer
}