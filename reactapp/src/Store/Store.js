import { combineReducers, configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./reducerds/WeatherReducerToolkit";
import { weatherReducer1 } from "./reducerds/WeatherReducer";
import { WeatherService } from "../Services/WeatherService";


const rootReducer = combineReducers({
    weather2: weatherReducer,
    weather: weatherReducer1,
    [WeatherService.reducerPath]: WeatherService.reducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(WeatherService.middleware),

})