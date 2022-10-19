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
Object.defineProperty(exports, "__esModule", { value: true });
exports.nats = void 0;
const nats_1 = require("nats");
const publish_1 = require("./publish");
const subscribe_1 = require("./subscribe");
class Nats {
    get js() {
        if (!this._js)
            throw new Error('Nats not connected');
        return this._js;
    }
    get nc() {
        if (!this._nc)
            throw new Error('Nats not connected');
        return this._nc;
    }
    connect(opts) {
        return __awaiter(this, void 0, void 0, function* () {
            this._nc = yield (0, nats_1.connect)(opts);
            this._nc.closed().then(() => console.log('Nats connection closed')).catch((e) => console.log(e));
            this._js = this._nc.jetstream();
        });
    }
    publish(subject, event) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, publish_1.publish)(subject, event, this.js);
        });
    }
    subscribe(subject, consumerConfig, callbackFunc) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, subscribe_1.subscribe)(subject, consumerConfig, callbackFunc, this.js);
        });
    }
}
exports.nats = new Nats();
