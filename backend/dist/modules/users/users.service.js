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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const user_model_1 = require("./models/user.model");
const bcrypt = require("bcrypt");
const watchlist_model_1 = require("../watchlist/models/watchlist.model");
const token_service_1 = require("../token/token.service");
let UsersService = class UsersService {
    constructor(userRepository, tokenService) {
        this.userRepository = userRepository;
        this.tokenService = tokenService;
    }
    async hashPassword(password) {
        try {
            return bcrypt.hash(password, 10);
        }
        catch (e) {
            throw new Error(e);
        }
    }
    async findUserByEmail(email) {
        try {
            return this.userRepository.findOne({
                where: { email: email },
                include: {
                    model: watchlist_model_1.Watchlist,
                    required: false,
                },
            });
        }
        catch (e) {
            throw new Error(e);
        }
    }
    async createUser(dto) {
        try {
            dto.password = await this.hashPassword(dto.password);
            await this.userRepository.create({
                firstName: dto.firstName,
                username: dto.username,
                email: dto.email,
                password: dto.password,
            });
            return dto;
        }
        catch (e) {
            throw new Error(e);
        }
    }
    async publicUser(email) {
        try {
            const user = await this.userRepository.findOne({
                where: { email },
                attributes: { exclude: ['password'] },
                include: {
                    model: watchlist_model_1.Watchlist,
                    required: false,
                },
            });
            const token = await this.tokenService.generateJwtToken(user);
            return { user, token };
        }
        catch (e) {
            throw new Error(e);
        }
    }
    async updateUser(email, dto) {
        try {
            await this.userRepository.update(dto, { where: { email } });
            return dto;
        }
        catch (e) {
            throw new Error(e);
        }
    }
    async deleteUser(email) {
        try {
            await this.userRepository.destroy({ where: { email } });
            return true;
        }
        catch (e) {
            new Error(e);
        }
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(user_model_1.User)),
    __metadata("design:paramtypes", [Object, token_service_1.TokenService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map