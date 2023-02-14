import { AuthService } from './auth.service';
import { CreateUserDTO } from '../users/dto';
import { UserLoginDTO } from './dto';
import { AuthUserResponse } from './response';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(dto: CreateUserDTO): Promise<AuthUserResponse>;
    login(dto: UserLoginDTO): Promise<AuthUserResponse>;
    test(): boolean;
}
