namespace CorerApi
{
    public class WeatherForecast
    {
        public int Id { get; set; }
        public String Date { get; set; }

        public int TemperatureC { get; set; }

        public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);

        public string? Summary { get; set; }
    }
    public static class WeatherForecastList
    {
        public static List<WeatherForecast> Weathers { get; set; }
    }
}