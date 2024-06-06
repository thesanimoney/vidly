"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isAdmin(req, res, next) {
    if (req.body.user.isAdmin)
        return res.status(403).send("Request Forbidden 403");
    next();
}
exports.default = isAdmin;
