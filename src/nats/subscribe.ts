import {JetStreamClient, consumerOpts, JsMsgCallback, JsMsg} from 'nats'

interface ConsumerConfig {
    durableName: string;
    deliverySubject: string;
    deliveryGroup: string;          // alias of queueGroup
}

// the streams will be created in the gateway
const subscribe = async <SEvent> (subject: string, consumerConfig: ConsumerConfig, callbackFunc: (event: SEvent, msg: JsMsg) => void, js: JetStreamClient) => {
    const opts = consumerOpts()
    opts.durable(consumerConfig.durableName)
    opts.manualAck()
    opts.ackExplicit()                  // try removing one of these :(
    opts.deliverTo(consumerConfig.deliverySubject)
    opts.deliverGroup(consumerConfig.deliveryGroup)
    opts.maxAckPending(100)


    const sub = await js.subscribe(subject, opts.callback((err, msg) => {
        if(err) {
            console.log('Error in receiving nats event');
            console.log(err);
            return;
        }
        const event = JSON.parse(Buffer.from(msg?.data as Uint8Array).toString()) as SEvent
        callbackFunc(event, msg as JsMsg)
    }))


    sub.closed.then(() => console.log('Subscription closed')).catch((e) => console.log(e))
    
}

export {subscribe, ConsumerConfig}