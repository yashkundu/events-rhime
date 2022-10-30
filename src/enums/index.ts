enum noun {
    user = 'user',
    post = 'post',
    comment = 'comment',
    like = 'like'           // make another nats for it :(
}

enum verb {
    created = 'created',
    authorized = 'authorized',
    deleted = 'deleted',
    toggled = 'toggled'           // make another nats for it to increase efficiency :(
}

export {noun, verb}