import {noun, verb} from '../enums'

function subject(n: noun, v: verb) {
    return `${noun}.${verb}`;
}

export {subject}