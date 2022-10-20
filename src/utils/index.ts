import {noun, verb} from '../enums'

function subject(n: noun, v: verb) {
    return `${n}.${v}`;
}

export {subject}