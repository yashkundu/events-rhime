"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verb = exports.noun = void 0;
var noun;
(function (noun) {
    noun["user"] = "user";
    noun["post"] = "post";
    noun["like"] = "like"; // make another nats for it :(
})(noun || (noun = {}));
exports.noun = noun;
var verb;
(function (verb) {
    verb["created"] = "created";
    verb["authorized"] = "authorized";
    verb["deleted"] = "deleted";
    verb["toggle"] = "toggle"; // make another nats for it to increase efficiency :(
})(verb || (verb = {}));
exports.verb = verb;
