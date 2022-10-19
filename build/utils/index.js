"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subject = void 0;
const enums_1 = require("../enums");
function subject(n, v) {
    return `${enums_1.noun}.${enums_1.verb}`;
}
exports.subject = subject;
