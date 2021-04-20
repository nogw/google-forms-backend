import mongoose from "mongoose"
const Schema = mongoose.Schema

const answerIndSchema = new Schema(
  {
    question: {
      type: String,
      required: true
    },
    answer: {
      type: String,
      required: true
    },
    typeForm: {
      type: String,
      default: "choice"
    }
  }
)

const answerSchema = new Schema(
  {
    form_id: {
      type: String,
      required: true,
    },
    user_prop_id: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      default: "anonymous",
    },
    date: {
      type: String,
      required: true
    },
    answers: [answerIndSchema]
  },
  {
    timestamps: true
  }
)

export default mongoose.model("Answer", answerSchema)