type posts = {
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