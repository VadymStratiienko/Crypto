import { User } from './models/user.model';
import { CreateUserDTO, UpdateUserDTO } from './dto';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: typeof User);
    hashPassword(password: string): Promise<string>;
    findUserByEmail(email: string): Promise<User>;
    createUser(dto: any): Promise<CreateUserDTO>;
    publicUser(email: string): Promise<User>;
    updateUser(email: string, dto: UpdateUserDTO): Promise<UpdateUserDTO>;
    deleteUser(email: string): Promise<boolean>;
}
