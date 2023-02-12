"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const errors_1 = require("../../common/constants/errors");
const bcrypt = require("bcrypt");
const token_service_1 = require("../token/token.service");
let AuthService = class AuthService {
    constructor(userService, tokenService) {
        this.userService = userService;
        this.tokenService = tokenService;
    }
    async registerUsers(dto) {
        try {
            const existUser = await this.userService.findUserByEmail(dto.email);
            if (existUser)
                throw new common_1.BadRequestException(errors_1.AppError.USER_EXIST);
            return this.userService.createUser(dto);
        }
        catch (e) {
            throw new Error(e);
        }
    }
    async loginUser(dto) {
        try {
            const existUser = await this.userService.findUserByEmail(dto.email);
            if (!existUser)
                throw new common_1.BadRequestException(errors_1.AppError.USER_NOT_EXIST);
            const validatePassword = await bcrypt.compare(dto.password, existUser.password);
            if (!validatePassword)
                throw new common_1.BadRequestException(errors_1.AppError.WRONG_DATA);
            const user = await this.userService.publicUser(dto.email);
            const token = await this.tokenService.generateJwtToken(user);
            return { user, token };
        }
        catch (e) {
            throw new Error(e);
        }
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        token_service_1.TokenService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map