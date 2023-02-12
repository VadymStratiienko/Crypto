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
exports.WatchlistService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const watchlist_model_1 = require("./models/watchlist.model");
let WatchlistService = class WatchlistService {
    constructor(watchlistRepository) {
        this.watchlistRepository = watchlistRepository;
    }
    async createAsset(user, dto) {
        try {
            const watchlist = {
                user: user.id,
                name: dto.name,
                assetId: dto.assetId,
            };
            await this.watchlistRepository.create(watchlist);
            return watchlist;
        }
        catch (e) {
            throw new Error(e);
        }
    }
    async deleteAsset(userId, assetId) {
        try {
            await this.watchlistRepository.destroy({
                where: { id: assetId, user: userId },
            });
            return true;
        }
        catch (e) {
            throw new Error(e);
        }
    }
};
WatchlistService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(watchlist_model_1.Watchlist)),
    __metadata("design:paramtypes", [Object])
], WatchlistService);
exports.WatchlistService = WatchlistService;
//# sourceMappingURL=watchlist.service.js.map