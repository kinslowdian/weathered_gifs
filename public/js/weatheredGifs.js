// DEBUG
var trace = function(msg){ console.log(msg); };

var main_weather;

function pageLoad_init()
{
	trace("pageLoad_init();");

	weather_build();
}

function weather_build()
{
	// 1a67481da557ef3b
	main_weather = {};
	main_weather.url = "http://api.wunderground.com/api/1a67481da557ef3b/conditions/q/UK/London.json";

	load_JSON_data(main_weather.url, weather_data_found);
}

function weather_data_found(data)
{
	main_weather.data = JSON.parse(data);

	trace(main_weather.data);

	weather_define();
}

function weather_define()
{
	var w = main_weather.data.current_observation.weather;

	// https://www.wunderground.com/weather/api/d/docs?d=resources/phrase-glossary

	main_weather.weatherType = w.toLowerCase();

	trace(main_weather.weatherType);
}




function load_JSON_data(file, callback)
{
	var xobj = new XMLHttpRequest();

	xobj.overrideMimeType("application/json");
	xobj.open('GET', file, true);
	xobj.onreadystatechange = function()
	{
		if(xobj.readyState == 4 && xobj.status == "200")
		{
			callback(xobj.responseText);
		}
	};

	xobj.send();	
}

