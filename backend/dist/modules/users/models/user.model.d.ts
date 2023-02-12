import { Model } from 'sequelize-typescript';
import { Watchlist } from '../../watchlist/models/watchlist.model';
export declare class User extends Model {
    firstName: string;
    username: string;
    email: string;
    password: string;
    watchlist: Watchlist[];
}
