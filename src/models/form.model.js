"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var Schema = mongoose_1.default.Schema;
var questionsSchema = new Schema({
    option: {
        type: String,
        default: ""
    }
});
var cardsSchema = new Schema({
    question: {
        type: String,
        default: ""
    },
    type: {
        type: String,
        default: "choice"
    },
    questions: [questionsSchema],
});
var formSchema = new Schema({
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
}, {
    timestamps: true
});
exports.default = mongoose_1.default.model("Form", formSchema);
