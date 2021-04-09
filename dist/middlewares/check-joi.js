"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (schema) {
    return function (req, res, next) {
        var error = schema.validate(req.params).error;
        var valid = error == null;
        if (valid) {
            next();
        }
        else {
            var details = error.details;
            var errorsDetail = details.map(function (i) { return i.message; });
            res.status(422).json({
                status: false,
                error: errorsDetail
            });
        }
    };
});
