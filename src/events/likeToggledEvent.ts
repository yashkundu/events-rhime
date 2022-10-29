

interface LikeToggledEvent {
    itemId: string,
    userId: string,
    // trusting the client for this field it may be wrong so the count may be inaccurate
    // but daily cron job will correct the count
    //   1 - the user has liked the post
    //   -1 - the user has disliked the post
    type: number,
    
    
    // unique id which will prevent the multiple handling of the events in the consumers
    eventId: string,
    

    
}

export {LikeToggledEvent}