import { Watchlist } from './models/watchlist.model';
import { CreateAssetResponse } from './response';
export declare class WatchlistService {
    private readonly watchlistRepository;
    constructor(watchlistRepository: typeof Watchlist);
    createAsset(user: any, dto: any): Promise<CreateAssetResponse>;
    deleteAsset(userId: number, assetId: string): Promise<boolean>;
}
