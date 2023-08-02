using Microsoft.AspNetCore.Mvc;

namespace CorerApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetWeatherForecast")]
        public IEnumerable<WeatherForecast> Get()
        {
            if (WeatherForecastList.Weathers != null)
            {
                return WeatherForecastList.Weathers;
            }
            else
            {
                var i = 1;
                var elements = Enumerable.Range(1, 5).Select(index => new WeatherForecast
                {
                    Id = i++,
                    Date = DateTime.Now.AddDays(index).ToString("yyyy-MM-dd"),
                    TemperatureC = Random.Shared.Next(-20, 55),
                    Summary = Summaries[Random.Shared.Next(Summaries.Length)]
                }).ToList();
                WeatherForecastList.Weathers = elements;
                return elements;
            }
        }

        [HttpPost()]
        public ActionResult<IEnumerable<WeatherForecast>> Post(WeatherForecast weatherForecast)
        {
            if (weatherForecast == null)
            {
                return BadRequest();
            }
            else
            {
                weatherForecast.Id = WeatherForecastList.Weathers.OrderBy(x => x.Id).Last().Id + 1;
                WeatherForecastList.Weathers.Add(weatherForecast);
                return Ok(WeatherForecastList.Weathers);
            }
        }

        [HttpPut()]
        public ActionResult<IEnumerable<WeatherForecast>> Put(WeatherForecast weatherForecast)
        {
            if (weatherForecast == null || WeatherForecastList.Weathers.Find(x => x.Id == weatherForecast.Id) == null)
            {
                return BadRequest();
            }
            else
            {
                var item = WeatherForecastList.Weathers.Find(x => x.Id == weatherForecast.Id);
                item.Date = weatherForecast.Date;
                item.TemperatureC = weatherForecast.TemperatureC;
                item.Summary = weatherForecast.Summary;

                return Ok(WeatherForecastList.Weathers);
            }
        }

        [HttpDelete("{id}")]
        public ActionResult<IEnumerable<WeatherForecast>> Delete(int id)
        {
            var weather = WeatherForecastList.Weathers.FirstOrDefault(x => x.Id == id);
            if (weather == null)
            {
                return NotFound();
            }
            WeatherForecastList.Weathers.Remove(weather);
            return Ok(WeatherForecastList.Weathers);
        }
    }
}