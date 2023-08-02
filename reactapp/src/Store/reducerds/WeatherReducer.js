
const GET_WEATHER = "GET_WEATHER"
const ADD_WEATHER = "ADD_WEATHER"
const DELETE_WEATHER = "DELETE_WEATHER"
const UPDATE_WEATHER = "UPDATE_WEATHER"
const LOAD_DATA = "LOAD_DATA"
const LOAD_ERROR = "LOAD_ERROR"

const defaultState = {
    Weather: [],
    IsLoading: false,
    Error: null,
}
export const weatherReducer1 = (state = defaultState, action) => {
    switch (action.type) {
        case GET_WEATHER:
            return {
                Weather: action.data,
                IsLoading: false,
            }
        case ADD_WEATHER:
            return {
                Weather: action.data,
                IsLoading: false,
            }
        case DELETE_WEATHER:
            return {
                Weather: action.data,
                IsLoading: false,
            }
        case UPDATE_WEATHER:
            return {
                Weather: action.data,
                IsLoading: false,
            }
        case LOAD_DATA:
            return {
                Weather: state.Weather,
                IsLoading: true,
            }
        case LOAD_ERROR:
            return {
                Weather: state.Weather,
                IsLoading: false,
                Error: action.data,
            }
        default:
            return state
    }
}

export const addWeath = (data) => ({ type: ADD_WEATHER, data })
export const getWeath = (data) => ({ type: GET_WEATHER, data })
export const delWeath = (data) => ({ type: ADD_WEATHER, data })
export const updWeath = (data) => ({ type: ADD_WEATHER, data })
export const load     = ()     => ({ type: LOAD_DATA })
export const loadError = (data) => ({ type: LOAD_ERROR, data })

