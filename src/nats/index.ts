import {
    connect as connectNats, 
    NatsConnection, 
    ConnectionOptions,
    JetStreamClient,
    JsMsg
} from 'nats'


import {publish as publishEvent} from './publish'
import {subscribe as subscribeEvents, ConsumerConfig} from './subscribe'

class Nats {
    private _nc!: NatsConnection;
    private _js!: JetStreamClient;

    get js(){
        if(!this._js) throw new Error('Nats not connected');
        return this._js
    }

    get nc(){
        if(!this._nc) throw new Error('Nats not connected');
        return this._nc
    }

    async connect(opts?:ConnectionOptions) {
        this._nc = await connectNats(opts);
        this._nc.closed().then(()=>console.log('Nats connection closed')).catch((e)=>console.log(e));
        this._js = this._nc.jetstream()
    }

    async publish<PEvent>(subject: string, event: PEvent) {
        await publishEvent<PEvent>(subject, event, this.js)
    }

    async subscribe<SEvent>(subject: string, consumerConfig: ConsumerConfig, callbackFunc: (event: SEvent, msg: JsMsg) => void) {
        await subscribeEvents<SEvent>(subject, consumerConfig, callbackFunc, this.js)
    }

}

export const nats = new Nats();