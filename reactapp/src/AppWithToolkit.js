import React, { Component, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Example from './ModalForWeather';
import { GetWeather2,DelWeather } from './Store/AsyncActions/weather2';

function App2() {
    const dispatch = useDispatch();
    const weather = useSelector(state => state.weather2.Weather);
    const weatherLoad = useSelector(state => state.weather2.IsLoading);
    const error = useSelector(state => state.weather2.Error);
    let contents = weatherLoad
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        : !error ? renderForecastsTable(weather,dispatch) : <p>{error}</p>;

    return (
        <div>
            <h1 id="tabelLabel" >Weather forecast using Slice</h1>
            <button className="btn btn-primary" onClick={() => dispatch(GetWeather2())}>
                load
            </button>
            <p>This component demonstrates fetching data from the server.</p>
            {contents}
        </div>
    );
}
function renderForecastsTable(forecasts,dispatch) {
    return (
        <div>
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Temp. (C)</th>
                        <th>Temp. (F)</th>
                        <th>Summary</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {forecasts.map(forecast =>
                        <tr key={forecast.id}>
                            <td>{forecast.date}</td>
                            <td>{forecast.temperatureC}</td>
                            <td>{forecast.temperatureF}</td>
                            <td>{forecast.summary}</td>
                            <td>
                                <Example weather={forecast} ></Example>
                                <button className="btn btn-primary ms-2" onClick={() => dispatch(DelWeather(forecast))}>
                                    delete
                                </button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            <Example ></Example>
        </div>
    );
}
export default App2;