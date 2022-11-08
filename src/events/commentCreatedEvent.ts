// email and userName are redundant :(
interface CommentCreatedEvent {
    commentId: string;

    // delete this not necessary :(
    userId: string
}

export {CommentCreatedEvent}