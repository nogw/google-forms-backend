"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_controller_1 = require("../controllers/user.controller");
var form_controller_1 = require("../controllers/form.controller");
var answer_controller_1 = require("../controllers/answer.controller");
var router = express_1.default.Router();
router.route('/user/register')
    .post(user_controller_1.default.register);
router.route('/user/login')
    .post(user_controller_1.default.login);
router.route('/form/create')
    .post(form_controller_1.default.create);
router.route('/form/update')
    .post(form_controller_1.default.updateForm);
router.route('/form/getMyForms')
    .get(form_controller_1.default.getMyForms);
router.route('/form/getForm')
    .get(form_controller_1.default.getForm);
router.route('/answer/createAnswer')
    .post(answer_controller_1.default.createAnswer);
router.route('/answer/getAnswer')
    .get(answer_controller_1.default.getAnswer);
exports.default = router;
