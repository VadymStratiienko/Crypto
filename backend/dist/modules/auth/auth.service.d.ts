import { UsersService } from '../users/users.service';
import { CreateUserDTO } from '../users/dto';
import { UserLoginDTO } from './dto';
import { TokenService } from '../token/token.service';
import { AuthUserResponse } from './response';
export declare class AuthService {
    private readonly userService;
    private readonly tokenService;
    constructor(userService: UsersService, tokenService: TokenService);
    registerUsers(dto: CreateUserDTO): Promise<CreateUserDTO>;
    loginUser(dto: UserLoginDTO): Promise<AuthUserResponse>;
}
