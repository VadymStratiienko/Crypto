import { UsersService } from '../users/users.service';
import { CreateUserDTO } from '../users/dto';
import { UserLoginDTO } from './dto';
import { AuthUserResponse } from './response';
export declare class AuthService {
    private readonly userService;
    constructor(userService: UsersService);
    registerUsers(dto: CreateUserDTO): Promise<AuthUserResponse>;
    loginUser(dto: UserLoginDTO): Promise<AuthUserResponse>;
}
