declare class UserResponse {
    firstName: string;
    username: string;
    email: string;
    password: string;
}
export declare class AuthUserResponse {
    user: UserResponse;
    token: string;
}
export {};
