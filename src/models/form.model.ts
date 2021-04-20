import mongoose from "mongoose"
const Schema = mongoose.Schema

const questionsSchema = new Schema(
  {
    option: {
      type: String,
      default: ""
    }
  }
)

const cardsSchema = new Schema(
  {
    question: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "choice"
    },
    questions: [questionsSchema],
  }
)

const formSchema = new Schema(
  {
    user_id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: "unknown"
    },
    description: {
      type: String,
      default: ""
    },
    data: {
      type: String,
      required: true
    },
    cards: [cardsSchema]
  },
  {
    timestamps: true
  }
)

export default mongoose.model("Form", formSchema)