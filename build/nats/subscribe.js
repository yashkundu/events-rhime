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
exports.subscribe = void 0;
const nats_1 = require("nats");
// the streams will be created in the gateway
const subscribe = (subject, consumerConfig, callbackFunc, js) => __awaiter(void 0, void 0, void 0, function* () {
    const opts = (0, nats_1.consumerOpts)();
    opts.durable(consumerConfig.durableName);
    opts.manualAck();
    opts.ackExplicit(); // try removing one of these :(
    opts.deliverTo(consumerConfig.deliverySubject);
    opts.deliverGroup(consumerConfig.deliveryGroup);
    opts.maxAckPending(100);
    const sub = yield js.subscribe(subject, opts.callback((err, msg) => {
        if (err) {
            console.log('Error in receiving nats event');
            console.log(err);
            return;
        }
        const event = JSON.parse(Buffer.from(msg === null || msg === void 0 ? void 0 : msg.data).toString());
        callbackFunc(event, msg);
    }));
    sub.closed.then(() => console.log('Subscription closed')).catch((e) => console.log(e));
});
exports.subscribe = subscribe;
