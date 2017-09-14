// https://www.wunderground.com/weather/api/d/docs?d=resources/phrase-glossary

function weatherTypeCreate(string)
{
	var wtc = {};

	wtc.dataWeatherType 	= "";
	wtc.dataDisplay 		= "";

	switch(string)
	{
		case "light drizzle":
		case "heavy drizzle":
		case "drizzle":
		case "light rain":
		case "heavy rain":
		case "rain":
		{
			wtc.dataWeatherType 	= "rain";
			wtc.dataDisplay 		= "Rain";
			
			break;
		}

		case "light snow":
		case "heavy snow":
		case "light snow grains":
		case "heavy snow grains":
		case "snow":
		case "light ice crystals":
		case "heavy ice crystals":
		case "ice crystals":
		case "light ice pellets":
		case "heavy ice pellets":
		case "ice pellets":
		case "light low drifting snow":
		case "heavy low drifting snow":
		case "drifting snow":
		case "light blowing snow":
		case "heavy blowing snow":
		case "blowing snow":
		{
			wtc.dataWeatherType 	= "snow";
			wtc.dataDisplay 		= "Snow";

			break;
		}

		case "light hail":
		case "heavy hail":
		case "small hail":
		case "hail":
		{
			wtc.dataWeatherType 	= "hail";
			wtc.dataDisplay 		= "Hail";

			break;
		}

		case "light mist":
		case "heavy mist":
		case "mist":
		{
			wtc.dataWeatherType 	= "mist";
			wtc.dataDisplay 		= "Mist";

			break;
		}

		case "light fog":
		case "heavy fog":
		case "fog":
		case "light fog patches":
		case "heavy fog patches":
		case "fog patches":
		{
			wtc.dataWeatherType 	= "fog";
			wtc.dataDisplay 		= "Fog";

			break;
		}

		case "light smoke":
		case "heavy smoke":
		case "smoke":
		{
			wtc.dataWeatherType 	= "smoke";
			wtc.dataDisplay 		= "Smoke";

			break;
		}

		case "light volcanic ash":
		case "heavy volcanic ash":
		case "volcanic ash":
		{
			wtc.dataWeatherType 	= "volcano";
			wtc.dataDisplay 		= "Volcano";

			break;
		}

		case "light widespread dust":
		case "heavy widespread dust":
		case "widespread dust":
		case "dust":
		{
			wtc.dataWeatherType 	= "dust";
			wtc.dataDisplay 		= "Dust";

			break;
		}

		case "light sand":
		case "heavy sand":
		case "sand":
		case "light sandstorm":
		case "heavy sandstorm":
		case "sandstorm":
		case "light low drifting sand":
		case "heavy low drifting sand":
		case "low drifting sand":
		case "drifting sand":
		case "light blowing sand":
		case "heavy blowing sand":
		case "blowing sand":
		{
			wtc.dataWeatherType 	= "sandstorm";
			wtc.dataDisplay 		= "Sandstorm";

			break;
		}

		case "light haze":
		case "heavy haze":
		case "haze":
		{
			wtc.dataWeatherType 	= "haze";
			wtc.dataDisplay 		= "Haze";

			break;
		}

		case "light spray":
		case "heavy spray":
		case "spray":
		{
			wtc.dataWeatherType 	= "spray";
			wtc.dataDisplay 		= "Spray";

			break;
		}

		case "light dust whirls":
		case "heavy dust whirls":
		case "dust whirls":
		case "light low drifting widespread dust":
		case "heavy low drifting widespread dust":
		case "low drifting widespread dust":
		case "light blowing widespread dust":
		case "heavy blowing widespread dust":
		case "blowing widespread dust":
		case "widespread dust":
		{
			wtc.dataWeatherType 	= "dust+storm";
			wtc.dataDisplay 		= "Dust Storm";

			break;
		}


		case "light rain mist":
		case "heavy rain mist":
		case "rain mist":
		{
			wtc.dataWeatherType 	= "mist";
			wtc.dataDisplay 		= "Mist";

			break;
		}

		case "light rain showers":
		case "heavy rain showers":
		case "rain showers":
		{
			wtc.dataWeatherType 	= "rain+showers";
			wtc.dataDisplay 		= "Rain Showers";

			break;
		}

		case "light snow showers":
		case "heavy snow showers":
		case "snow showers":
		{
			wtc.dataWeatherType 	= "snow+showers";
			wtc.dataDisplay 		= "Snow Showers";

			break;
		}

		case "light snow blowing snow mist":
		case "heavy snow blowing snow mist":
		case "snow blowing snow mist":
		case "snow blowing":
		case "snow mist":
		{
			wtc.dataWeatherType 	= "snow+mist";
			wtc.dataDisplay 		= "Snow Mist";

			break;
		}

		case "light ice pellet showers":
		case "heavy ice pellet showers":
		case "ice pellet showers":
		case "light hail showers":
		case "heavy hail showers":
		case "hail showers":
		case "light small hail showers":
		case "heavy small hail showers":
		case "small hail showers":
		{
			wtc.dataWeatherType 	= "hail+showers";
			wtc.dataDisplay 		= "Hail Showers";

			break;
		}

		case "light thunderstorm":
		case "heavy thunderstorm":
		case "thunderstorm":
		case "light thunderstorms and rain":
		case "heavy thunderstorms and rain":
		case "thunderstorms and rain":
		case "light thunderstorms and snow":
		case "heavy thunderstorms and snow":
		case "thunderstorms and snow":
		case "light thunderstorms and ice pellets":
		case "heavy thunderstorms and ice pellets":
		case "thunderstorms and ice pellets":
		case "light thunderstorms with hail":
		case "heavy thunderstorms with hail":
		case "thunderstorms with hail":
		case "light thunderstorms with small hail":
		case "heavy thunderstorms with small hail":
		case "thunderstorms with small hail":
		{
			wtc.dataWeatherType 	= "thunderstorm";
			wtc.dataDisplay 		= "Thunderstorm";

			break;
		}

		case "light freezing drizzle":
		case "heavy freezing drizzle":
		case "freezing drizzle":
		case "light freezing rain":
		case "heavy freezing rain":
		case "freezing rain":
		{
			wtc.dataWeatherType 	= "freezing+rain";
			wtc.dataDisplay 		= "Freezing Rain";

			break;
		}

		case "light freezing fog":
		case "heavy freezing fog":
		case "freezing fog":
		{
			wtc.dataWeatherType 	= "freezing+fog";
			wtc.dataDisplay 		= "Freezing Fog";

			break;
		}

		case "patches of fog":
		case "shallow fog":
		case "partial fog":
		case "fog":
		{
			wtc.dataWeatherType 	= "fog";
			wtc.dataDisplay 		= "Fog";

			break;
		}

		case "overcast":
		{
			wtc.dataWeatherType 	= "overcast";
			wtc.dataDisplay 		= "Overcast";

			break;
		}

		case "clear":
		{
			wtc.dataWeatherType 	= "sunny";
			wtc.dataDisplay 		= "Sunny";

			break;
		}

		case "partly cloudy":
		case "mostly cloudy":
		case "cloudy":		
		case "scattered clouds":
		case "clouds":
		{
			wtc.dataWeatherType 	= "cloud";
			wtc.dataDisplay 		= "Cloudy";

			break;
		}

		case "squalls":
		{
			wtc.dataWeatherType 	= "storm";
			wtc.dataDisplay 		= "Storm";

			break;
		}

		case "funnel cloud":
		{
			wtc.dataWeatherType 	= "tornado";
			wtc.dataDisplay 		= "Tornado";

			break;
		}

		default:
		{
			wtc.dataWeatherType 	= "weather";
			wtc.dataDisplay 		= "Usual Weather";
		}

	}

	return wtc;
}


