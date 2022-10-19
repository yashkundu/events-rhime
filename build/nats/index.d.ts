import { NatsConnection, ConnectionOptions, JetStreamClient, JsMsg } from 'nats';
import { ConsumerConfig } from './subscribe';
declare class Nats<PEvent, SEvent> {
    private _nc;
    private _js;
    get js(): JetStreamClient;
    get nc(): NatsConnection;
    connect(opts?: ConnectionOptions): Promise<void>;
    publish(subject: string, event: PEvent): Promise<void>;
    subscribe(subject: string, consumerConfig: ConsumerConfig, callbackFunc: (event: SEvent, msg: JsMsg) => void): Promise<void>;
}
export declare const nats: Nats<unknown, unknown>;
export {};
