"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var express_1 = require("express");
var mongoConnection_1 = require("./services/mongoConnection");
var middleware_1 = require("./middleware");
exports.app = (0, express_1.default)();
var connection = (0, mongoConnection_1.default)();
(0, middleware_1.default)(exports.app);
exports.app.listen(3333, function () {
    console.log('Listening on port... ', 3333);
});
