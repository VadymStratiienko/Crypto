import React, {FC, useCallback, useEffect, useMemo, useRef} from 'react';
import {useAppDispatch, useAppSelector} from "../../utils/hook";
import {getFavoriteAssets} from "../../store/thunks/assets";
import {Box, Grid} from "@mui/material";
import {useStyles} from "./styles";
import AreaChart from "../../Components/charts/area-chart";
import LineChart from "../../Components/charts/line-chart";
import TrendUp from '../../assets/images/chart/trend-up.svg'
import TrendDown from '../../assets/images/chart/trend-down.svg'
import {IChartData, ISingleAsset} from "../../common/types/assets";


const Home: FC = (): JSX.Element => {
    const favoriteAssets: IChartData[] = useAppSelector(
        (state) => state.assets.favoriteAssets,
    )
    const dispatch = useAppDispatch()
    const fetchDataRef = useRef(false)
    const classes = useStyles()

    const favoriteAssetName = ['bitcoin', 'ethereum']

    const filteredArray = useMemo(() => {
        return favoriteAssets.filter(
            (value, index, self) =>
                index === self.findIndex((t) => t.name === value.name),
        )
    }, [favoriteAssets])

    const fetchData = useCallback(
        (data: string[]) => {
            data.forEach((element: string) => {
                dispatch(getFavoriteAssets(element))
            })
        },
        [dispatch],
    )

    useEffect(() => {
        if (fetchDataRef.current) return
        fetchDataRef.current = true
        fetchData(favoriteAssetName)
    }, [favoriteAssetName, fetchData])

    const renderFavoriteBlock = filteredArray.map((element: IChartData) => {
        let currentPrice = 0
        let changePrice = 0
        element.singleAsset.forEach((element: ISingleAsset) => {
            currentPrice = element.current_price
            changePrice = element.price_change_percentage_24h
        })
        return (
            <Grid item xs={12} sm={6} lg={6} key={element.name}>
                <Grid container className={classes.topCardItem}>
                    <Grid item xs={12} sm={6} lg={6}>
                        <h3 className={classes.assetName}>{element.name}</h3>
                        <div className={classes.itemDetails}>
                            <h3 className={classes.cardPrice}>
                                ${currentPrice}
                            </h3>
                            <Box
                                className={
                                    changePrice > 0
                                        ? `${classes.priceTrend} ${classes.trendUp}`
                                        : `${classes.priceTrend} ${classes.trendDown}`
                                }
                            >
                                {changePrice > 0 ? (
                                    <img src={TrendUp} alt="TrendUp" />
                                ) : (
                                    <img src={TrendDown} alt="TrendDown" />
                                )}
                                <span>{Number(changePrice).toFixed(2)}%</span>
                            </Box>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6}>
                        <AreaChart data={element.price_chart_data} />
                    </Grid>
                </Grid>
            </Grid>
        )
    })

    return (
        <Box className={classes.root}>
            <Grid container spacing={2} className={classes.areaChart}>
                {renderFavoriteBlock}
            </Grid>
            <Grid container className={classes.lineChartBlock}>
                <Grid item xs={12} sm={12} lg={12}>
                    {filteredArray.length && <LineChart data={filteredArray} />}
                </Grid>
            </Grid>
        </Box>
    )
}

export default Home