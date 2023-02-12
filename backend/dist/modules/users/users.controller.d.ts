import { UsersService } from './users.service';
import { UpdateUserDTO } from './dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UsersService);
    updateUser(updateDto: UpdateUserDTO, request: any): Promise<UpdateUserDTO>;
    deleteUser(request: any): Promise<boolean>;
}
