export interface User {
    username: string;
    email: string;
    password: string;
}

export type Props = {
    createUser: (newUser: User) => void
}