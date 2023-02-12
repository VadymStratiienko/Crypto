import { Model } from 'sequelize-typescript';
import { User } from '../../users/models/user.model';
export declare class Watchlist extends Model {
    user: User;
    name: string;
    assetId: string;
}
