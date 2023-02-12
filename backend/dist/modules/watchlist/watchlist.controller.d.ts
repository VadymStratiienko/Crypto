import { WatchlistService } from './watchlist.service';
import { WatchListDTO } from './dto';
import { CreateAssetResponse } from './response';
export declare class WatchlistController {
    private readonly watchlistService;
    constructor(watchlistService: WatchlistService);
    createAsset(assetDto: WatchListDTO, request: any): Promise<CreateAssetResponse>;
    deleteAsset(assetId: string, request: any): Promise<boolean>;
}
