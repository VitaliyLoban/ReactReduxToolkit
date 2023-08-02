import { createSlice } from "@reduxjs/toolkit"
import { GetWeather2 } from "../AsyncActions/weather2";

const NewsState = {
    Weather: [],
    IsLoading: false,
    Error: null,
}
export const WeatherSlice = createSlice({
    name: "Wethers2",
    initialState: NewsState,
    reducers: {
        getWeather2(state, action) {
            state.IsLoading = false;
            state.Weather = action.payload
        },
        addWeather2(state, action) {
            state.IsLoading = false;
            state.Weather = action.payload
        },
        delWeather2(state, action) {
            state.IsLoading = false;
            state.Weather = action.payload
        },
        updWeather2(state, action) {
            state.IsLoading = false;
            state.Weather = action.payload
        },
        lloadData2(state, action) {
            state.IsLoading = true;
        },
        loadError2(state, action) {
            state.IsLoading = false;
            state.Error = action.payload
        }
    },
    extraReducers: {
        [GetWeather2.pending.type]: (state) => {
            state.IsLoading = true;
        },
        [GetWeather2.fulfilled.type]: (state, action) => {
            state.IsLoading = false;
            state.Weather = action.payload
        },
        
        [GetWeather2.rejected.type]: (state, action) => {
            state.IsLoading = false;
            state.Error = action.payload;
        }
    }
})
export default WeatherSlice.reducer