import { NatsConnection, ConnectionOptions, JetStreamClient, JsMsg } from 'nats';
import { ConsumerConfig } from './subscribe';
declare class Nats {
    private _nc;
    private _js;
    get js(): JetStreamClient;
    get nc(): NatsConnection;
    connect(opts?: ConnectionOptions): Promise<void>;
    publish<PEvent>(subject: string, event: PEvent): Promise<void>;
    subscribe<SEvent>(subject: string, consumerConfig: ConsumerConfig, callbackFunc: (event: SEvent, msg: JsMsg) => void): Promise<void>;
}
export declare const nats: Nats;
export {};
