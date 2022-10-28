

interface LikeToggledEvent {
    itemId: string,
    userId: string,
    // trusting the client for this field it may be wrong so the count may be inaccurate
    // but daily cron job will correct the count
    num: number                 //   1 - the user has liked the post
                                //   -1 - the user has disliked the post
}

export {LikeToggledEvent}