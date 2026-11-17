export interface Company {
    name: string,
    title: string
}

export interface User {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    username: string,
    company?: Company
}

export interface UsersResponse {
    users: Array<User>
}