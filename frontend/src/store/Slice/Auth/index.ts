import {createSlice} from "@reduxjs/toolkit";
import {IAuthState} from "../../../Common/types/auth";

const initialState: IAuthState = {
    user: {
        id: null,
        firstName: '',
        username: '',
        email: '',
        createAt: '',
        updateAt: '',
        watchlist: [
            {
                id: null,
                name: '',
                assetId: '',
                createdAt: '',
                updateAt: '',
                user: null
            }
        ]
    },
    isLogged: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            state.user = action.payload
            state.isLogged = true
        }
    }
})

export const {login} = authSlice.actions
export default authSlice.reducer