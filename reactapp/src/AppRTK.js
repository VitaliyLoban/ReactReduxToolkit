import Example from "./ModalForWeather";
import { WeatherService } from "./Services/WeatherService"

function AppRTK() {
    const { data: weathers, error, isLoading, refetch } = WeatherService.useGetAllWeathersQuery("", {
        //pollingInterval:1000
    })
    const [createWeather, { }] = WeatherService.useCreateWeatherMutation();
    const [deleterWeather, { }] = WeatherService.useDeleteWeatherMutation();
    const [update, { }] = WeatherService.useUpdateWeatherMutation();
    let contents = isLoading
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        : !error ? renderForecastsTable(weathers, deleterWeather, createWeather,update) : <p>smth wrong</p>;

    return (
        <div>
            <h1 id="tabelLabel" >Weather forecast using RTK</h1>
            <button className="btn btn-primary" >
                load
            </button>
            <p>This component demonstrates fetching data from the server.</p>
            {contents}
        </div>
    )
}
function renderForecastsTable(forecasts, delF, addF, updF) {
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
                                <Example weather={forecast} addFun={updF} ></Example>
                                <button className="btn btn-primary ms-2" onClick={() => delF(forecast.id)}>
                                    delete
                                </button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            <Example addFun={addF} ></Example>
        </div>
    );
}
export default AppRTK