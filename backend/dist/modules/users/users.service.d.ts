import { User } from './models/user.model';
import { CreateUserDTO, UpdateUserDTO } from './dto';
import { TokenService } from '../token/token.service';
import { AuthUserResponse } from '../auth/response';
export declare class UsersService {
    private readonly userRepository;
    private readonly tokenService;
    constructor(userRepository: typeof User, tokenService: TokenService);
    hashPassword(password: string): Promise<string>;
    findUserByEmail(email: string): Promise<User>;
    createUser(dto: any): Promise<CreateUserDTO>;
    publicUser(email: string): Promise<AuthUserResponse>;
    updateUser(email: string, dto: UpdateUserDTO): Promise<UpdateUserDTO>;
    deleteUser(email: string): Promise<boolean>;
}
