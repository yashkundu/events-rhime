// email and userName are redundant :(
    interface PostCreatedEvent {
        postId: string;
        userId: string
    }
    
    export {PostCreatedEvent}