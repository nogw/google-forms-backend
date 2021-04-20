"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var answerIndSchema = new Schema({
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
});
var answerSchema = new Schema({
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
}, {
    timestamps: true
});
exports.default = mongoose_1.default.model("Answer", answerSchema);
