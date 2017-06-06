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
			wtc.dataDisplay 		= "rain";
			
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
			wtc.dataDisplay 		= "snow";

			break;
		}

		case "light hail":
		case "heavy hail":
		case "small hail":
		case "hail":
		{
			wtc.dataWeatherType 	= "hail";
			wtc.dataDisplay 		= "hail";

			break;
		}

		case "light mist":
		case "heavy mist":
		case "mist":
		{
			wtc.dataWeatherType 	= "mist";
			wtc.dataDisplay 		= "mist";

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
			wtc.dataDisplay 		= "fog";

			break;
		}

		case "light smoke":
		case "heavy smoke":
		case "smoke":
		{
			wtc.dataWeatherType 	= "smoke";
			wtc.dataDisplay 		= "smoke";

			break;
		}

		case "light volcanic ash":
		case "heavy volcanic ash":
		case "volcanic ash":
		{
			wtc.dataWeatherType 	= "volcano";
			wtc.dataDisplay 		= "volcano";

			break;
		}

		case "light widespread dust":
		case "heavy widespread dust":
		case "widespread dust":
		case "dust":
		{
			wtc.dataWeatherType 	= "dust";
			wtc.dataDisplay 		= "dust";

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
			wtc.dataDisplay 		= "sandstorm";

			break;
		}

		case "light haze":
		case "heavy haze":
		case "haze":
		{
			wtc.dataWeatherType 	= "haze";
			wtc.dataDisplay 		= "haze";

			break;
		}

		case "light spray":
		case "heavy spray":
		case "spray":
		{
			wtc.dataWeatherType 	= "spray";
			wtc.dataDisplay 		= "spray";

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
			wtc.dataDisplay 		= "dust storm";

			break;
		}


		case "light rain mist":
		case "heavy rain mist":
		case "rain mist":
		{
			wtc.dataWeatherType 	= "mist";
			wtc.dataDisplay 		= "mist";

			break;
		}

		case "light rain showers":
		case "heavy rain showers":
		case "rain showers":
		{
			wtc.dataWeatherType 	= "rain+showers";
			wtc.dataDisplay 		= "rain showers";

			break;
		}

		case "light snow showers":
		case "heavy snow showers":
		case "snow showers":
		{
			wtc.dataWeatherType 	= "snow+showers";
			wtc.dataDisplay 		= "snow showers";

			break;
		}

		case "light snow blowing snow mist":
		case "heavy snow blowing snow mist":
		case "snow blowing snow mist":
		case "snow blowing":
		case "snow mist":
		{
			wtc.dataWeatherType 	= "snow+mist";
			wtc.dataDisplay 		= "snow mist";

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
			wtc.dataDisplay 		= "hail showers";

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
			wtc.dataDisplay 		= "thunderstorm";

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
			wtc.dataDisplay 		= "freezing rain";

			break;
		}

		case "light freezing fog":
		case "heavy freezing fog":
		case "freezing fog":
		{
			wtc.dataWeatherType 	= "freezing+fog";
			wtc.dataDisplay 		= "freezing fog";

			break;
		}

		case "patches of fog":
		case "shallow fog":
		case "partial fog":
		case "fog":
		{
			wtc.dataWeatherType 	= "fog";
			wtc.dataDisplay 		= "fog";

			break;
		}

		case "overcast":
		{
			wtc.dataWeatherType 	= "overcast";
			wtc.dataDisplay 		= "overcast";

			break;
		}

		case "clear":
		{
			wtc.dataWeatherType 	= "sunny";
			wtc.dataDisplay 		= "sunny";

			break;
		}

		case "partly cloudy":
		case "mostly cloudy":
		case "cloudy":		
		case "scattered clouds":
		case "clouds":
		{
			wtc.dataWeatherType 	= "cloudy";
			wtc.dataDisplay 		= "cloudy";

			break;
		}

		case "squalls":
		{
			wtc.dataWeatherType 	= "storm";
			wtc.dataDisplay 		= "storm";

			break;
		}

		case "funnel cloud":
		{
			wtc.dataWeatherType 	= "tornado";
			wtc.dataDisplay 		= "tornado";

			break;
		}

		default:
		{
			wtc.dataWeatherType 	= "weather";
			wtc.dataDisplay 		= "usual weather";
		}

	}

	return wtc;
}


