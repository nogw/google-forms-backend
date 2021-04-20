"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var form_model_1 = __importDefault(require("../models/form.model"));
var create = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var form;
    return __generator(this, function (_a) {
        try {
            form = new form_model_1.default({
                user_id: req.body.user_id,
                title: req.body.title,
                description: req.body.description,
                data: req.body.data,
                cards: req.body.cards
            });
            form.save()
                .then(function (form) {
                return res.status(200).json({
                    message: "created form",
                    link: "" + form._id
                });
            })
                .catch(function (error) {
                return res.status(400).json({
                    messageError: error
                });
            });
        }
        catch (error) {
            return [2 /*return*/, res.status(400).json({
                    messageError: error
                })];
        }
        return [2 /*return*/];
    });
}); };
var updateForm = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var formUpd;
    return __generator(this, function (_a) {
        formUpd = {
            user_id: req.body.user_id,
            title: req.body.title,
            description: req.body.description,
            cards: req.body.cards
        };
        form_model_1.default.findOneAndUpdate({ _id: req.body._id }, formUpd, { upsert: true, new: true }, function (err, doc) {
            if (err) {
                console.log("Something wrong when updating data!");
            }
            console.log(doc);
        });
        return [2 /*return*/];
    });
}); };
var getMyForms = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var forms, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, form_model_1.default.find({ user_id: req.query.id }, { 'id': 1, 'user_id': 1, 'title': 1, 'data': 1 }).exec()];
            case 1:
                forms = _a.sent();
                return [2 /*return*/, res.status(200).json({
                        results: forms
                    })];
            case 2:
                error_1 = _a.sent();
                return [2 /*return*/, res.status(400).json({
                        messageError: error_1
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
var getForm = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var form, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, form_model_1.default.findById(req.query.idForm).populate("answers").exec()];
            case 1:
                form = _a.sent();
                if (form != null) {
                    return [2 /*return*/, res.status(200).json({
                            message: "achei",
                            result: form
                        })];
                }
                else {
                    return [2 /*return*/, res.status(400).json({
                            messageError: "user not found"
                        })];
                }
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                return [2 /*return*/, res.status(400).json({
                        messageError: error_2
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.default = {
    create: create,
    getMyForms: getMyForms,
    getForm: getForm,
    updateForm: updateForm
};
