type Posts = {
    id: string,
    body: string,
    createdAt: string,
    username: string
}

type RegisterInput = {
    username: string,
    email: string,
    password: string,
    confirmPassword: string
}

type User = {
    username: string,
    password: string,
}