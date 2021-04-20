"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var Schema = mongoose_1.default.Schema;
var userSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    passwordConfirm: {
        type: String
    },
    avatarColor: {
        type: Number
    },
}, {
    timestamps: true
});
exports.default = mongoose_1.default.model("User", userSchema);
