import {JetStreamClient} from 'nats'

const publish = async <PEvent> (subject: string, event: PEvent, js: JetStreamClient) => {
    await js.publish(subject, Buffer.from(JSON.stringify(event)))
}

export {publish}