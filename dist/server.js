"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var UserController_1 = __importDefault(require("./controllers/UserController"));
app.get('/user', UserController_1.default.listUser);
app.get('/user/:id', UserController_1.default.getById);
var port = process.env.port || 3000;
app.listen(port, function () { return console.log("test"); });
