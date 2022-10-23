
// email and userName are redundant :(
interface UserCreatedEvent {
    userId: string;
    email: string;               
    userName: string
}

export {UserCreatedEvent}