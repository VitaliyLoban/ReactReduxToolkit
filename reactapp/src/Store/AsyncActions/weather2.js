import axios from "axios"
import { WeatherSlice } from "../reducerds/WeatherReducerToolkit"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const GetWeather = () => async (dispatch) => {
    try {
        dispatch(WeatherSlice.actions.lloadData2())
        const resp = await axios.get('weatherforecast')
        dispatch(WeatherSlice.actions.getWeather2(resp.data))
    }
    catch (e) {
        dispatch(WeatherSlice.actions.loadError2(e.message))
    }
}

export const GetWeather2 = createAsyncThunk(
    'weather/getAll',
    async()=>{
        const resp = await axios.get('weatherforecast')
        return resp.data
    }
)

export const AddWeather = (weather) => async (dispatch) => {
    try {
        dispatch(WeatherSlice.actions.lloadData2())
        const resp = await axios.post('weatherforecast', weather)
        dispatch(WeatherSlice.actions.addWeather2(resp.data))
    }
    catch (e) {
        dispatch(WeatherSlice.actions.loadError2(e.message))  
    }
}

export const UpdWeather = (weather) => async (dispatch) => {
    try {
        dispatch(WeatherSlice.actions.lloadData2())
        const resp = await axios.put('weatherforecast', weather)
        dispatch(WeatherSlice.actions.addWeather2(resp.data))
    }
    catch (e) {
        dispatch(WeatherSlice.actions.loadError2(e.message))  
    }
}

export const DelWeather = (weather) => async (dispatch) => {
    try {
        dispatch(WeatherSlice.actions.lloadData2())
        const resp = await axios.delete('weatherforecast/'+weather.id)
        dispatch(WeatherSlice.actions.delWeather2(resp.data))
    }
    catch (e) {
        dispatch(WeatherSlice.actions.loadError2(e.message))  
    }
}