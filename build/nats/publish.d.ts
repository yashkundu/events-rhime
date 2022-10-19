import { JetStreamClient } from 'nats';
declare const publish: <PEvent>(subject: string, event: PEvent, js: JetStreamClient) => Promise<void>;
export { publish };
