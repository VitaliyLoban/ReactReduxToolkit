import axios from "axios"
import { getWeath, addWeath, load, loadError, updWeath, delWeath } from "../reducerds/WeatherReducer"

export const GetWeather = () => async (dispatch) => {
    try {
        dispatch(load())
        const resp = await axios.get('weatherforecast')
        dispatch(getWeath(resp.data))
    }
    catch (e) {
        dispatch(loadError(e.message))
    }
}

export const AddWeather = (weather) => async (dispatch) => {
    try {
        dispatch(load())
        const resp = await axios.post('weatherforecast', weather)
        dispatch(addWeath(resp.data))
    }
    catch (e) {
        dispatch(loadError(e.message))  
    }
}

export const UpdWeather = (weather) => async (dispatch) => {
    try {
        dispatch(load())
        const resp = await axios.put('weatherforecast', weather)
        dispatch(updWeath(resp.data))
    }
    catch (e) {
        dispatch(loadError(e.message))  
    }
}

export const DelWeather = (weather) => async (dispatch) => {
    try {
        dispatch(load())
        const resp = await axios.delete('weatherforecast/'+weather.id)
        dispatch(delWeath(resp.data))
    }
    catch (e) {
        dispatch(loadError(e.message))  
    }
}