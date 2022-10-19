import { JetStreamClient, JsMsg } from 'nats';
interface ConsumerConfig {
    durableName: string;
    deliverySubject: string;
    deliveryGroup: string;
}
declare const subscribe: <SEvent>(subject: string, consumerConfig: ConsumerConfig, callbackFunc: (event: SEvent, msg: JsMsg) => void, js: JetStreamClient) => Promise<void>;
export { subscribe, ConsumerConfig };
